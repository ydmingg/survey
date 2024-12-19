<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowLeftIcon } from 'lucide-vue-next'

const currentTime = ref(new Date().toLocaleTimeString('zh-CN', {
    hour: '2-digit',
    minute: '2-digit'
}))

const timeInterval = setInterval(() => {
    currentTime.value = new Date().toLocaleTimeString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit'
    })
}, 1000)

onUnmounted(() => {
    clearInterval(timeInterval)
})

const emit = defineEmits(['back'])

const onBack = () => {
    emit('back')
}
</script>

<template>
    <header class="bg-white shadow-sm fixed top-0 w-full z-10">
      <div class="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <button @click="onBack" class="text-gray-600 hover:text-gray-900">
            <ArrowLeftIcon class="h-5 w-5" />
          </button>
          <h1 class="text-lg font-semibold">2024年度优秀单位评选</h1>
        </div>
        <div class="text-sm text-gray-500">{{ currentTime }}</div>
      </div>
    </header>
</template>
  
  