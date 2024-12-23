<template>
	<div class="min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 py-16">
		<main class="mx-auto max-w-[1000px]">
			<div class="mb-16 text-center">
				<h1
					class="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
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
									class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Name
								</th>
								<th
									scope="col"
									class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Age
								</th>
								<th
									scope="col"
									class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Email
								</th>
                                
							</tr>
						</thead>
						<tbody class="bg-white divide-y divide-gray-200">
							<tr v-for="(person, index) in people" :key="index">
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

<script>
	export default {
		name: "Table",
		data() {
			return {
				people: [
                { name: "John Doe", age: 28, email: "john@example.com" },
					{ name: "Jane Smith", age: 34, email: "jane@example.com" },
                    { name: "Sam Green", age: 22, email: "sam@example.com" },
                    { name: "John Doe", age: 28, email: "john@example.com" },
					{ name: "Jane Smith", age: 34, email: "jane@example.com" },
                    { name: "Sam Green", age: 22, email: "sam@example.com" },
                    { name: "John Doe", age: 28, email: "john@example.com" },
					{ name: "Jane Smith", age: 34, email: "jane@example.com" },
					{ name: "Sam Green", age: 22, email: "sam@example.com" },
                    { name: "John Doe", age: 28, email: "john@example.com" },
					{ name: "Jane Smith", age: 34, email: "jane@example.com" },
                    { name: "Sam Green", age: 22, email: "sam@example.com" },
                    { name: "John Doe", age: 28, email: "john@example.com" },
					{ name: "Jane Smith", age: 34, email: "jane@example.com" },
                    { name: "Sam Green", age: 22, email: "sam@example.com" },
                    { name: "John Doe", age: 28, email: "john@example.com" },
					{ name: "Jane Smith", age: 34, email: "jane@example.com" },
					{ name: "Sam Green", age: 22, email: "sam@example.com" },
				],
			};
		},
	};
</script>
