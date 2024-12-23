<template>
    <div class="min-h-screen bg-gradient-to-b from-green-50 to-green">
      <Header />
      
      <main class="max-w-3xl mx-auto px-4 pt-20 pb-16">
        <!-- 封面 -->
        <div class="relative rounded-xl overflow-hidden mb-8 shadow-lg">
          <img 
            :src="placeholder" 
            alt="Survey Hero" 
            class="w-full h-48 object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <div class="text-white">
              <h2 class="text-2xl font-bold mb-2">深标协2024年度会员单位评选颁奖活动</h2>
              <p class="text-sm opacity-90">
                {{title}}
              </p>
            </div>
          </div>
        </div>
  
        <form @submit.prevent="submitSurvey" class="space-y-8">
          <div v-for="(question, index) in requiredQuestions" :key="index" class="bg-white rounded-lg shadow-sm p-6">
            <div class="flex items-start gap-2">
              <h3 class="text-lg font-medium mb-4">{{ question.title }}</h3>
              <span class="text-red-500">*</span>
            </div>
            
            <!-- Rating -->
            <div class="mb-6">
              <!-- <div class="flex justify-between text-sm text-gray-500 mb-2">
                <span>非常不满意</span>
                <span>非常满意</span>
              </div> -->
              <div class="grid grid-cols-5 gap-4 lg:grid-cols-10 lg:gap-3">
                <div 
                  v-for="n in 10" 
                  :key="n"
                  class="flex justify-center items-center"
                >
                  <button 
                  type="button"
                  @click="setRating(question.id, n)"
                  :class="[
                    'w-10 h-10 rounded-full text-sm font-medium transition-all duration-200',
                    question.rating === n
                        ? 'bg-green-500 text-white transform scale-110'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                ]"
                  >{{ n }}</button>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="bg-white rounded-lg shadow-sm p-6">
            <div class="flex items-start gap-2">
              <h3 class="text-lg font-medium mb-4">2. 参与活动情况</h3>
              <span class="text-gray-400">(选填)</span>
              <span class="text-red-500">*</span>
            </div>
            <textarea
              v-model="comments"
              rows="4"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="请输入您的意见或建议..."
            ></textarea>
          </div> -->
  
          <!-- <div v-for="(question, index) in optionalQuestions" :key="index" class="bg-white rounded-lg shadow-sm p-6">
            <div class="flex items-start gap-2">
              <h3 class="text-lg font-medium mb-4">{{ question.title }}</h3>
              <span class="text-gray-400">(选填)</span>
              <span class="text-red-500">*</span>
            </div>
            
            <div class="mb-6">
                
              <div class="flex flex-wrap gap-3">
                <div 
                  v-for="n in 11" 
                  :key="n - 1"
                  class="flex justify-center items-center"
                >
                <button 
                type="button"
                @click="setRating(question.id, n - 1)"
                :class="[
                'w-10 h-10 rounded-full text-sm font-medium transition-all duration-200',
                question.rating === n - 1
                    ? 'bg-green-500 text-white transform scale-110'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            ]">{{ n - 1 }}</button>
                </div>
              </div>
            </div>
          </div> -->
  
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-green-500 text-white py-4 rounded-lg font-medium hover:bg-green-600 focus:ring-4 focus:ring-blue-200 transition-all duration-200 disabled:opacity-50"
          >
            {{ isSubmitting ? '提交中...' : '提交评分' }}
          </button>
        </form>
      </main>
  
      <Dialog
        :is-open="!!dialog.show"
        :type="dialog.type"
        :title="dialog.title"
        :message="dialog.message"
        :on-close="closeDialog"
      />
    </div>
</template>
  
<script setup>
import { ref  } from 'vue'
import Header from '@/components/Header.vue'
import Dialog from '@/components/Dialog.vue'
import { useRoute } from 'vue-router';

// 引入图片
const placeholder = new URL('@/assets/img/survey-bg.png', import.meta.url).href


// 获取路由参数
const route = useRoute()
const title = route.params.title



// 必填项数据
const requiredQuestions = ref([
    { id: 1, title: '1. 企业评分', rating: null },
    { id: 2, title: '2. 参与活动情况', rating: null },
    { id: 3, title: '3. 其他加分项', rating: null },
])

// 选填项数据
const optionalQuestions = ref([
    { id: 4, title: '3. 其他加分项', rating: null },
])


// 表单状态
const comments = ref('')
const isSubmitting = ref(false)
const dialog = ref({
    show: false,
    type: 'success',
    title: '',
    message: ''
})

// 设置评分
const setRating = (questionId, rating) => {
    const allQuestions = [...requiredQuestions.value, ...optionalQuestions.value]
    const question = allQuestions.find(q => q.id === questionId)
    if (question) {
        question.rating = rating
    }
}

// 显示弹窗
const showDialog = (type, title, message) => {
    dialog.value = {
        show: true,
        type,
        title,
        message
    }
}

// 移出弹窗
const closeDialog = () => {
    dialog.value.show = false
}

// 提交验证
const submitSurvey = async () => {
    // Validate required questions
    if (requiredQuestions.value.some(q => q.rating === null)) {
        showDialog('error', '提交失败', '请为所有必填问题评分')
        return
    }

    isSubmitting.value = true

    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        const formData = {
            required: requiredQuestions.value.map(q => ({ id: q.id, rating: q.rating })),
            optional: optionalQuestions.value.map(q => ({ id: q.id, rating: q.rating })),
            comments: comments.value
        }

        console.log('Survey submitted:', formData)

        showDialog('success', '提交成功', '感谢您的参与！')

        // Reset form
        requiredQuestions.value.forEach(q => q.rating = null)
        optionalQuestions.value.forEach(q => q.rating = null)
        comments.value = ''

    } catch (error) {
        showDialog('error', '提交失败', '请稍后重试')
    } finally {
        isSubmitting.value = false
    }
}

</script>