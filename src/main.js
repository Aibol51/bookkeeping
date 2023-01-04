import { createApp, markRaw } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import {
    Tabbar,
    TabbarItem,
    Button,
    Cell,
    CellGroup,
    Col,
    Row,
    Icon,
    Field,
    Form,
    Tab,
    Tabs,
} from "vant";
import "vant/lib/index.css";

const pinia = createPinia();
pinia.use(({ store }) => {
    store.router = markRaw(router);
});

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Button);
app.use(Cell);
app.use(CellGroup);
app.use(Col);
app.use(Row);
app.use(Icon);
app.use(Field);
app.use(Form);
app.use(Tab);
app.use(Tabs);
app.mount("#app");
