<template>
    <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <main class="max-w-3xl mx-auto ">
            <!-- <div class="sticky top-0 text-lg font-semibold px-4 py-4 flex items-center justify-between bg-white z-2">2024年度优秀设计企业</div> -->
            <FileCard :requiredQuestions="requiredQuestions" />

            <!-- <div class="sticky top-0 text-lg font-semibold px-4 py-4 mt-8 flex items-center justify-between bg-white z-2">2024年度优秀生产企业</div> -->
            <!-- <FileCard :requiredQuestions="requiredQuestions" /> -->

            <!-- <div class="sticky top-0 text-lg font-semibold px-4 py-4 mt-8 flex items-center justify-between bg-white z-2">2024年度工程实施杰出企业</div> -->
            <!-- <FileCard :requiredQuestions="requiredQuestions" /> -->

            <!-- <div class="sticky top-0 text-lg font-semibold px-4 py-4 mt-8 flex items-center justify-between bg-white z-2">2024年度卓越营销企业</div> -->
            <!-- <FileCard :requiredQuestions="requiredQuestions" /> -->

            <!-- <div class="sticky top-0 text-lg font-semibold px-4 py-4 mt-8 flex items-center justify-between bg-white z-2">2024年度跨境先锋企业</div> -->
            <!-- <FileCard :requiredQuestions="requiredQuestions" /> -->



        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import FileCard from '@/components/FileCard.vue'

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
    { id: 1, title: '深圳市力创美广告有限公司', rating: null, img: logoArr[0] },
    { id: 2, title: '深圳市问道标识有限公司', rating: null, img: logoArr[1] },
    { id: 3, title: '深圳市自由美标识有限公司', rating: null, img: logoArr[2] },
    { id: 4, title: '深圳大学建筑与城市规划学院', rating: null, img: logoArr[3] },
    { id: 5, title: '深圳市高度标识设计有限公司', rating: null, img: logoArr[4] },
    { id: 6, title: '深圳市琢典标识有限公司', rating: null, img: logoArr[5] },
    { id: 7, title: '深圳字工场发光字工程有限公司', rating: null, img: logoArr[6] },
])

  
</script>
