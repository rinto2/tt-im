<script lang="ts">
import { defineComponent, isVue2 } from 'vue-demi'
import { v2, v3 } from './render'

export default defineComponent({
    render() {
        return isVue2 ? v2 : v3
    }
})
</script>

<style lang="less">
button {
    padding: 10px;
}
</style>