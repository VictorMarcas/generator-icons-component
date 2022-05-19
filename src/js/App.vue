<template>
    <div class="flex items-center justify-center w-full h-screen bg-gray-100">
        <div class="flex items-center text-xl font-bold text-indigo-500 uppercase gap-x-2">
            <alert-icon class="w-6 h-6 fill-indigo-500"></alert-icon>
            <span>{{ message }}</span>
        </div>
    </div>
</template>

<script>
    import AlertIcon from './components/icons/AlertIcon.vue'
    export default {
        name: 'app',
        components: { AlertIcon },
        data () {
            return {
                message: 'Hola Mundo'
            }
        }
    }
</script>
