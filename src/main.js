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
  Popup,
  Grid,
  GridItem,
  NumberKeyboard,
  DatePicker,
} from "vant";
import "vant/lib/index.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faBurger,
  faCartShopping,
  faCar,
  faShirt,
  faChampagneGlasses,
  faDumbbell,
  faPhoneVolume,
  faHouse,
  faHandHoldingDroplet,
  faBabyCarriage,
  faPaw,
  faBriefcaseMedical,
  faPlane,
  faBed,
  faGraduationCap,
  faGift,
  faCircleDollarToSlot,
  faArrowUpFromBracket,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faUserSecret,
  faBurger,
  faCartShopping,
  faCar,
  faShirt,
  faChampagneGlasses,
  faDumbbell,
  faPhoneVolume,
  faHouse,
  faHandHoldingDroplet,
  faBabyCarriage,
  faPaw,
  faBriefcaseMedical,
  faPlane,
  faBed,
  faGraduationCap,
  faGift,
  faCircleDollarToSlot,
  faArrowUpFromBracket,
  faHandHoldingDollar,
);

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
app.use(Popup);
app.use(Grid);
app.use(GridItem);
app.use(NumberKeyboard);
app.use(DatePicker);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
