
export class PageResult<T> {
    constructor(
        private readonly  data: T,
        private readonly total: number,
        private readonly page: number,
        private readonly pageSize: number,
    ) { }

  

}
