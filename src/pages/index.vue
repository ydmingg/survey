<template>
    <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <main class="max-w-3xl mx-auto px-4 pt-4 pb-16">
            <!-- <div class="relative rounded-xl overflow-hidden mb-8 shadow-lg">fd</div> -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div v-for="(question, index) in requiredQuestions" :key="index" class="bg-white rounded-xl shadow-sm p-3">
                    <router-link to="survey">
                        <div class="flex flex-col items-start justify-center gap-2">
                            <img :src="placeholder" class="w-full rounded-lg" alt="">
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

const requiredQuestions = ref([
    { id: 1, title: 'xxx企业1xxx企业1xxx企业1', rating: null },
    { id: 2, title: 'xxx企业2', rating: null },
    { id: 3, title: 'xxx企业3', rating: null },
    { id: 4, title: 'xxx企业4', rating: null },
    { id: 5, title: 'xxx企业5', rating: null },
    { id: 6, title: 'xxx企业6', rating: null },
    { id: 7, title: 'xxx企业7', rating: null },
    { id: 8, title: 'xxx企业8', rating: null },
    { id: 9, title: 'xxx企业9', rating: null },
])

// const setRating = (questionId, rating) => {
//     const allQuestions = [...requiredQuestions.value]
//     const question = allQuestions.find(q => q.id === questionId)
//     if (question) {
//         question.rating = rating
//     }
// }

  
</script>
