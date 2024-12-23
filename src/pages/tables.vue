<template>
	<div class="min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 py-16">
		<main class="mx-auto max-w-[1200px] min-w-[1024px] px-10">
			<div class="mb-16 text-center">
				<h1
					class="mb-4 text-4xl xl:text-5xl xl:mb-6 font-bold tracking-tight text-gray-900">
					深标协2024年度会员单位评选颁奖活动
				</h1>
				<p className="text-lg text-gray-600">
					表彰2024年度优秀会员单位
				</p>
			</div>
			<div
				class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
				<div class="px-6 py-8">
					<table class="w-full caption-bottom text-sm">
						<thead class="bg-gray-50">
							<tr>
								<th
									scope="col"
									class="w-[8%] px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									序号
								</th>
								<th
									scope="col"
									class="w-1/4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									名称
								</th>
								<th
									scope="col"
									class="w-1/4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									年龄
								</th>
								<th
									scope="col"
									class="w-1/4 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									序号
								</th>
							</tr>
						</thead>
						<tbody class="bg-white divide-y divide-gray-200">
							<tr
								v-for="(person, index) in paginatedData"
								:key="index">
								<td
									class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{{ person.id }}
								</td>
								<td
									class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{{ person.name }}
								</td>
								<td
									class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{{ person.age }}
								</td>
                                
								<td
									class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
									{{ person.email }}
								</td>
							</tr>
						</tbody>
					</table>
					<div class="flex justify-center mt-4">
						<Pagination
							:currentPage="currentPage"
							:totalPages="totalPages"
							@updatePage="updatePage" />
					</div>
				</div>
			</div>
		</main>
		<a
			href="https://www.funxdata.com"
			target="_blank"
			class="block w-full text-center mt-20 pb-10 text-gray-300 text-sm"
			>powerd by piksel</a
		>
	</div>
</template>

<script setup>
	import { ref, computed } from "vue";
	import Pagination from "@/components/Pagination.vue";

    const currentPage = ref(1);
	const perPage = ref(6); // 设置每页显示5条数据
	const data = ref([
		{ id: "01", name: "John Doe", age: 28, email: "john@example.com" },
		{ id: "02", name: "Jane Smith", age: 34, email: "jane@example.com" },
		{ id: "03", name: "Sam Green", age: 22, email: "sam@example.com" },
		{ id: "04", name: "Anna Brown", age: 45, email: "anna@example.com" },
		{ id: "05", name: "Tom Black", age: 31, email: "tom@example.com" },
		{ id: "06", name: "Lucy White", age: 29, email: "lucy@example.com" },
		{ id: "07", name: "James Blue", age: 37, email: "james@example.com" },
		{ id: "08", name: "Nancy Yellow", age: 26, email: "nancy@example.com" },
		{ id: "09", name: "Michael Red", age: 40, email: "michael@example.com"},
		{ id: "10", name: "Sarah Green", age: 23, email: "sarah@example.com" },
        { id: "11", name: "David Brown", age: 35, email: "david@example.com" },
        { id: "12", name: "David Brown", age: 35, email: "david@example.com" },
	]);

    // 计算总页数
	const totalPages = computed(() => {
		return Math.ceil(data.value.length / perPage.value);
	});

    // 计算当前页的数据
    const paginatedData = computed(() => {
		const start = (currentPage.value - 1) * perPage.value;
		const end = start + perPage.value;
		return data.value.slice(start, end);
	});

    // 更新当前页
	const updatePage = (page) => {
		currentPage.value = page;
	};
</script>
