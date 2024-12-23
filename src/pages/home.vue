<template>
    <div class="min-h-screen bg-gradient-to-b from-green-50 to-green-50">
        <main class="max-w-3xl mx-auto ">
            <div class="sticky top-0 text-lg bg-gradient-to-r from-green-300 to-green-50 font-semibold px-4 py-4 mt-8 first:mt-0 flex items-center justify-between text-green-700 z-10">2024年度优秀设计企业</div>
            <FileCard :requiredQuestions="requiredQuestions" />

            <div class="sticky top-0 text-lg bg-gradient-to-r from-green-300 to-green-50 font-semibold px-4 py-4 mt-8 first:mt-0 flex items-center justify-between text-green-700 z-10">2024年度优秀生产企业</div>
            <FileCard :requiredQuestions="requiredQuestions" />

            <div class="sticky top-0 text-lg bg-gradient-to-r from-green-300 to-green-50 font-semibold px-4 py-4 mt-8 first:mt-0 flex items-center justify-between text-green-700 z-10">2024年度工程实施杰出企业</div>
            <FileCard :requiredQuestions="requiredQuestions" />

            <div class="sticky top-0 text-lg bg-gradient-to-r from-green-300 to-green-50 font-semibold px-4 py-4 mt-8 first:mt-0 flex items-center justify-between text-green-700 z-10">2024年度卓越营销企业</div>
            <FileCard :requiredQuestions="requiredQuestions" />

            <div class="sticky top-0 text-lg bg-gradient-to-r from-green-300 to-green-50 font-semibold px-4 py-4 mt-8 first:mt-0 flex items-center justify-between text-green-700 z-10">2024年度跨境先锋企业</div>
            <FileCard :requiredQuestions="requiredQuestions" />


        </main>
        <a href="https://www.funxdata.com" target="_blank" class="block w-full text-center mt-20 pb-10 text-gray-300 text-sm">powerd by piksel</a>
    </div>
    
</template>

<script setup>
import { ref } from 'vue'
import FileCard from '@/components/FileCard.vue'

// 引入图片
const default_img = new URL('@/assets/img/default.png', import.meta.url).href

const logoArr = [
    "http://50001056.s21i.huaweicloudsite.cn/4/ABUIABAEGAAgr-GupQYomq_5rAMw3gE4eg!300x300.png.webp",
    "http://50001056.s21i.huaweicloudsite.cn/4/ABUIABAEGAAgr-GupQYo0J-oxAEw3gE4eg.png.webp",
    "http://50001056.s21i.huaweicloudsite.cn/4/ABUIABAEGAAgr-GupQYo5Ozq3wUw3gE4eg.png.webp",
    "http://50001056.s21i.huaweicloudsite.cn/4/ABUIABAEGAAgsfGupQYoxtXVtgUw3gE4eg.png.webp",
    "http://50001056.s21i.huaweicloudsite.cn/4/ABUIABAEGAAgjomfswYoo7W2YTCVBzj9Aw!300x300.png.webp",
    "http://50001056.s21i.huaweicloudsite.cn/4/ABUIABAEGAAgyomfswYo5_77xAcwlQc4-QM!300x300.png.webp",
    "http://50001056.s21i.huaweicloudsite.cn/4/ABUIABAEGAAgvsbCpgYo18WY4QEw3gE4eg.png.webp",
]

const requiredQuestions = ref([
    { id: 1, title: '深圳市力创美广告有限公司', rating: null, img: default_img },
    { id: 2, title: '深圳市问道标识有限公司', rating: null, img: default_img },
    { id: 3, title: '深圳市自由美标识有限公司', rating: null, img: default_img },
    { id: 4, title: '深圳大学建筑与城市规划学院', rating: null, img: default_img },
    { id: 5, title: '深圳市高度标识设计有限公司', rating: null, img: default_img },
    { id: 6, title: '深圳市琢典标识有限公司', rating: null, img: default_img },
    { id: 7, title: '深圳字工场发光字工程有限公司', rating: null, img: default_img },
])

  
</script>
