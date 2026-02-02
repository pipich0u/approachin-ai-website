module.exports = {
  apps: [
    {
      name: "approaching-server",          // 项目名
      script: "pnpm",                      // 执行命令
      args: "start",                       // pnpm start
      exec_mode: "cluster",                // 集群模式
      instances: 2,                        // 进程数
      autorestart: true,                   // 异常自动重启
      watch: false,                        // 不监听文件变化
      max_restarts: 10,                    // 最大重启次数
      restart_delay: 3000,                 // 重启延迟(ms)

      // 日志配置
      output: "/var/log/pm2/approaching-server/out.log",
      error: "/var/log/pm2/approaching-server/error.log",
      merge_logs: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss",

      // 环境变量（可选）
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};