import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
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
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://icskhzdberzltvanukyc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imljc2toemRiZXJ6bHR2YW51a3ljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI0Nzg2MjMsImV4cCI6MTk4ODA1NDYyM30.hQK6VlXVJuJv1oz7ZVZwEQnfyWssKCzpJkJ5xrDPHMk";
const supabase = createClient(supabaseUrl, supabaseKey);

const app = createApp(App);
app.use(router);
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

app.use(supabase);
app.mount("#app");
