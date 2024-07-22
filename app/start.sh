file='KVcache.db'
if [ -e "$file" ]; then
    rm $file
fi

cp app/init.db $file
uvicorn app.main:app --host '0.0.0.0' --port 11123 --reload