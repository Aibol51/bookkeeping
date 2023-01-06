<template>
    <div>
        <h1 id="my_note">我的账本</h1>
        <van-cell-group inset>
            <van-cell>
                <van-row justify="space-between">
                    <van-col span="6">
                        <van-row>
                            <van-row span="8"><h3>￥14764.94</h3></van-row>
                            <van-row span="8">月支出</van-row>
                        </van-row>
                    </van-col>
                    <van-col span="6"><van-icon name="manager" /></van-col>
                </van-row>
            </van-cell>
            <van-cell>
                <van-row justify="space-between">
                    <van-col span="6">
                        <van-row>
                            <van-row span="8"><h3>￥14764.94</h3></van-row>
                            <van-row span="8">月收入</van-row>
                        </van-row>
                    </van-col>
                    <van-col span="6">
                        <van-row>
                            <van-row span="8"><h3>￥14764.94</h3></van-row>
                            <van-row span="8">月结余</van-row>
                        </van-row>
                    </van-col>
                    <van-col span="6">
                        <van-row>
                            <van-row span="8"><h3>预算资金</h3></van-row>
                            <van-row span="8">点击设置</van-row>
                        </van-row>
                    </van-col>
                </van-row>
            </van-cell>
        </van-cell-group>
    </div>
    <FooterTap></FooterTap>
    <AddMenu></AddMenu>
</template>
<script setup>
import FooterTap from "@/components/FooterTap.vue";
import AddMenu from "@/components/AddMenu/AddMenu.vue";
</script>
<style lang="scss" scoped>
#my_note {
    padding: 40px 0px 0px 16px;
}
.van-cell-group--inset {
    margin-top: 5%;
    border-radius: 20px;
}
</style>
