<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import './static/iconFont/iconfont.css'
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}

</style>
