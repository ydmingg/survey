<template>
	<div class="flex align-center gap-4 mt-4">
		<button
			@click="prevPage"
			:disabled="currentPage === 1"
			class="px-3 h-9 border rounded disabled:opacity-50 text-xs">
			上一页
		</button>
		<div v-for="page in totalPages" :key="page" class="">
			<button
				@click="changePage(page)"
				:class="{ 'bg-green-500 text-white': currentPage === page }"
				class="w-9 h-9 border rounded text-sm">
				{{ page }}
			</button>
		</div>
		<button
			@click="nextPage"
			:disabled="currentPage === totalPages"
			class="px-3 h-9 border rounded disabled:opacity-50 text-xs">
			下一页
		</button>
	</div>
</template>

<script setup>
	import { toRefs } from "vue";

    // 定义props
	const props = defineProps({
		currentPage: {
			type: Number,
			required: true,
		},
		totalPages: {
			type: Number,
			required: true,
		},
	});


	const emits = defineEmits(["updatePage"]);
	const { currentPage, totalPages } = toRefs(props);

    // 切换页码
	const changePage = (page) => {
		emits("updatePage", page);
	};

    // 上一页
	const prevPage = () => {
		if (currentPage.value > 1) {
			emits("updatePage", currentPage.value - 1);
		}
	};

    // 下一页
	const nextPage = () => {
		if (currentPage.value < totalPages.value) {
			emits("updatePage", currentPage.value + 1);
		}
	};
</script>
