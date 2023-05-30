<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { useForm, Head } from '@inertiajs/vue3';
import Post from "@/Components/Post.vue";

defineProps(['posts']);
const form = useForm({
    message: '',
});
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <div class="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
<!--            <button-->
<!--                class="mb-4 ml-1 items-center px-1 pt-1 border-b-2 border-gray-950 text-sm font-medium leading-5 text-gray-900"-->
            <form @submit.prevent="form.post(route('posts.store'), { onSuccess: () => form.reset() })">
                <textarea
                    v-model="form.message"
                    placeholder="What's on your mind?"
                    class="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                ></textarea>
                <InputError :message="form.errors.message" class="mt-2" />
                <PrimaryButton class="mt-4">Post</PrimaryButton>
            </form>
            <div class="mt-6 bg-white shadow-sm rounded-lg divide-y">
                <Post
                    v-for="post in posts"
                    :key="post.id"
                    :post="post"
                />
            </div>
        </div>
    </AuthenticatedLayout>
</template>
<style>
    textarea {
        resize: none;
    }
</style>
