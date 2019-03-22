import dva from 'dva'
import './index.less'
import createHistory from 'history/createBrowserHistory'
//1.初始化
const app = dva({
    history:createHistory()
});

//2.插件


//3.Model
app.model(require('./models/app').default);

//4.Router
app.router(require('./router').default);

//5.start

app.start('#root');