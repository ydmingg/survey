<template>
    <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <main class="max-w-3xl mx-auto px-4 pt-4 pb-16">
            <!-- <div class="relative rounded-xl overflow-hidden mb-8 shadow-lg">fd</div> -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div v-for="(question, index) in requiredQuestions" :key="index" class="bg-white rounded-xl shadow-sm p-3">
                    <router-link to="survey">
                        <div class="flex flex-col items-start justify-center gap-2">
                            <img :src="question.img" class="w-full rounded-lg" alt="">
                            <p class="w-full text-md font-medium text-center">{{ question.title }}</p>
                        </div>
                    </router-link>
                </div>

            </div>
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue'
// import SurveyForm from './pages/survey.vue'
const placeholder = new URL('@/assets/img/placeholder.svg', import.meta.url).href;
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

// const setRating = (questionId, rating) => {
//     const allQuestions = [...requiredQuestions.value]
//     const question = allQuestions.find(q => q.id === questionId)
//     if (question) {
//         question.rating = rating
//     }
// }

  
</script>
