<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4 pt-4 md:pt-6">
        <div v-for="(question, index) in requiredQuestions" :key="index" class="bg-white rounded-xl shadow-sm p-3">
            <router-link :to="{ name: 'Survey', params: { title: question.title } }">
                <div class="flex flex-col items-start justify-center gap-2">
                    <div class="overflow-hidden relative z-1"><img :src="question.img" class="w-full rounded-lg scale-125" alt=""></div> 
                    <p class="w-full text-md font-medium text-center">{{ question.title }}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>


<script setup>
defineProps({
    requiredQuestions: {
        type: Array,
    },
    
})



</script>