import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css'
import zhCN from 'antd/locale/zh_CN';
createRoot(document.getElementById('root')).render(
      <ConfigProvider locale={zhCN} theme={{ token: { colorPrimary: '#00b96b' } }}>
        <App />
      </ConfigProvider>
)
