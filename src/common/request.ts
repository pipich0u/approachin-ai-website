export interface RequestOptions extends RequestInit {
    params?: Record<string, any>;
}

export interface ResData<T = any>{
    code: number;
    message: string;
    data: T;
}

function buildQuery(params?: Record<string, any>) {
    if (!params) return '';
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
            query.append(key, String(value));
        }
    });
    return `?${query.toString()}`;
}

export async function request<T = any>(
    url: string,
    options: any = {}
): Promise<ResData<T>> {

    const { params, headers, body, ...rest } = options;

    const method = (rest.method || "GET").toUpperCase();

    let fullUrl = url;
    let finalBody = body;

    if (["GET", "DELETE"].includes(method)) {
        fullUrl = url + buildQuery(params);

        if (body) {
            try {
                const obj = typeof body === "string" ? JSON.parse(body) : body;
                fullUrl = url + buildQuery(obj);
            } catch {}
        }

        finalBody = undefined; 
    }

    if (["POST", "PUT", "PATCH"].includes(method)) {
        finalBody = body
            ? typeof body === "string"
                ? body
                : JSON.stringify(body)
            : undefined;

        fullUrl = url + buildQuery(params);
    }

    const res = await fetch(fullUrl, {
        headers: {
            "Content-Type": "application/json",
            ...(headers || {})
        },
        body: finalBody,
        ...rest
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`Request failed: ${res.status} - ${text}`);
    }

    return res.json() as Promise<ResData<T>>;
}
