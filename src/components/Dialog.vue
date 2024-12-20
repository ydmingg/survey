<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="fixed inset-0 bg-black/50" @click="onClose"></div>
      <div class="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        <div class="p-6">
          <div class="flex items-center gap-3 mb-4">
            <div 
              :class="[
                'w-10 h-10 rounded-full flex items-center justify-center',
                type === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
            ]"
            >
              <CheckIcon v-if="type === 'success'" class="w-5 h-5" />
              <XIcon v-else class="w-5 h-5" />
            </div>
            <h3 class="text-lg font-semibold">{{ title }}</h3>
          </div>
          <p class="text-gray-600">{{ message }}</p>
          <div class="mt-6 flex justify-end">
            <button
              @click="onClose"
              class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              确定
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script setup>
import { CheckIcon, XIcon } from 'lucide-vue-next'

defineProps({
    isOpen: {
        type: Boolean,
        required: true
    },
    type: {
        type: String,
        default: 'success',
        validator: (value) => ['success', 'error'].includes(value)
    },
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    onClose: {
        type: Function,
        required: true
    }
})
</script>