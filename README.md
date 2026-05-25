# Intern Management System

一个基于 MERN 栈的实习生管理系统，用于管理实习生的日常任务、进度追踪和反馈收集。

---

## 📋 项目需求

### 业务需求
- **管理员端**：管理实习生信息、分配任务、查看进度、提供反馈
- **实习生端**：查看任务、提交作业、查看进度和反馈

### 功能需求
1. 用户认证系统（JWT）
2. 管理员仪表板
3. 实习生仪表板
4. 任务管理系统
5. 任务提交系统
6. 进度追踪
7. 反馈系统
8. 角色权限控制

---

## 🏗️ 架构设计

### 整体架构
```
┌─────────────────────────────────────────────────────────────────┐
│                      客户端 (Client)                           │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────────────┐   │
│  │  Admin UI   │   │  Intern UI  │   │    Login Page       │   │
│  └──────┬──────┘   └──────┬──────┘   └──────────┬──────────┘   │
└─────────┼─────────────────┼──────────────────────┼──────────────┘
          │                 │                      │
          ▼                 ▼                      ▼
┌─────────────────────────────────────────────────────────────────┐
│                      API 网关 (Express)                        │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────────────┐   │
│  │  Auth API   │   │  Task API   │   │   Submission API    │   │
│  ├─────────────┤   ├─────────────┤   ├─────────────────────┤   │
│  │ Intern API  │   │Progress API │   │   Feedback API      │   │
│  └─────────────┘   └─────────────┘   └─────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    数据库 (MongoDB)                            │
│  ┌─────────┐ ┌─────────┐ ┌──────────┐ ┌───────────┐ ┌─────────┐│
│  │  User   │ │ Intern  │ │  Task    │ │ Submission│ │Feedback ││
│  └─────────┘ └─────────┘ └──────────┘ └───────────┘ └─────────┘│
└─────────────────────────────────────────────────────────────────┘
```

### 目录结构
```
Intern-Management-system-web/
├── frontend/                 # 前端应用
│   ├── public/              # 静态资源
│   ├── src/
│   │   ├── assets/          # 资源文件和工具函数
│   │   ├── components/      # UI组件
│   │   ├── context/         # React Context
│   │   ├── pages/           # 页面组件
│   │   ├── App.jsx          # 主应用组件
│   │   └── main.jsx         # 入口文件
│   └── package.json
├── server/                  # 后端服务
│   ├── controllers/         # 控制器
│   ├── db/                  # 数据库配置
│   ├── middleware/          # 中间件
│   ├── models/              # 数据模型
│   ├── routes/              # 路由配置
│   ├── index.js             # 服务入口
│   └── package.json
└── README.md
```

---

## 🛠️ 技术栈

### 前端技术
| 技术 | 版本 | 说明 |
|------|------|------|
| React | ^19.2.6 | 前端框架 |
| Vite | ^8.0.10 | 构建工具 |
| Tailwind CSS | ^4.3.0 | CSS框架 |
| React Router DOM | ^7.15.0 | 路由管理 |
| Axios | ^1.16.1 | HTTP客户端 |
| React Icons | ^5.6.0 | 图标库 |

### 后端技术
| 技术 | 版本 | 说明 |
|------|------|------|
| Node.js | - | 运行时环境 |
| Express.js | ^5.2.1 | Web框架 |
| MongoDB | - | 数据库 |
| Mongoose | ^9.6.2 | ODM |
| JWT | ^9.0.3 | 认证令牌 |
| bcrypt | ^6.0.0 | 密码加密 |
| cors | ^2.8.6 | 跨域处理 |
| nodemon | ^3.1.14 | 开发热重载 |

---

## 🚀 启动方式

### 环境要求
- Node.js >= 18.x
- MongoDB >= 5.0

### 1. 克隆项目
```bash
git clone https://github.com/your-username/Intern-Management-system-web.git
cd Intern-Management-system-web
```

### 2. 安装依赖

**前端依赖**：
```bash
cd frontend
npm install
```

**后端依赖**：
```bash
cd ../server
npm install
```

### 3. 配置环境变量

在 `server/` 目录下创建 `.env` 文件：
```env
PORT=5000
MONGOOSE_URL="mongodb://localhost:27017/intern_management_system"
JWT_KEY="your_secret_key_here"
```

### 4. 初始化管理员账户

```bash
cd server
node userseed.js
```

### 5. 启动服务

**启动后端服务**（终端1）：
```bash
cd server
npm start
```

**启动前端开发服务器**（终端2）：
```bash
cd frontend
npm run dev
```

### 6. 访问地址
- 前端：http://localhost:5173
- 后端API：http://localhost:5000

---

## 🔐 登录方式

### 管理员账户
| 字段 | 值 |
|------|------|
| 邮箱 | admin@gmail.com |
| 密码 | admin |

### 登录流程
1. 访问首页自动跳转到登录页面
2. 输入邮箱和密码
3. 系统验证用户身份（JWT认证）
4. 根据角色自动跳转到对应仪表板：
   - 管理员 → `/admin-dashboard`
   - 实习生 → `/intern-dashboard`

### 认证机制
- 使用 JWT (JSON Web Token) 进行无状态认证
- Token 有效期：10天
- Token 存储在 localStorage 中
- 路由级别的权限控制（PrivateRoutes、RoleBaseRoute）

---

## 📦 依赖说明

### 前端核心依赖
```json
{
  "react": "^19.2.6",
  "react-dom": "^19.2.6",
  "react-router-dom": "^7.15.0",
  "axios": "^1.16.1",
  "react-icons": "^5.6.0",
  "react-data-table-component": "^7.7.1",
  "styled-components": "^6.4.1",
  "@tailwindcss/vite": "^4.3.0"
}
```

### 后端核心依赖
```json
{
  "express": "^5.2.1",
  "mongoose": "^9.6.2",
  "jsonwebtoken": "^9.0.3",
  "bcrypt": "^6.0.0",
  "cors": "^2.8.6",
  "dotenv": "^17.4.2",
  "nodemon": "^3.1.14",
  "multer": "^2.1.1"
}
```

---

## 📁 API 接口

| 模块 | 方法 | 路径 | 说明 |
|------|------|------|------|
| 认证 | POST | `/api/auth/login` | 用户登录 |
| 认证 | GET | `/api/auth/verify` | 验证Token |
| 实习生 | CRUD | `/api/intern` | 实习生管理 |
| 任务 | CRUD | `/api/task` | 任务管理 |
| 提交 | CRUD | `/api/submission` | 任务提交 |
| 进度 | CRUD | `/api/progress` | 进度追踪 |
| 反馈 | CRUD | `/api/feedback` | 反馈管理 |

---

## 📄 License

MIT License
