<template>
  <div>
    <div class="list-items" v-if="loading">
      <div class="loading-item" v-for="(n, index) in 5" :key="index">
        <span class="glow-checkbox" />
        <span class="glow-text"> <span>Loading</span> <span>cool</span> <span>state</span> </span>
      </div>
    </div>
    <div class="list-items" v-if="noTasks && !loading">
      <div class="wrapper-message">
        <span class="icon-check" />
        <div class="title-message">You have no tasks</div>
        <div class="subtitle-message">Sit back and relax</div>
      </div>
    </div>
    <div class="list-items" v-if="taskLoadDone">
      <task
        v-for="(task, index) in tasksInOrder"
        :key="index"
        :task="task"
        @archiveTask="$emit('archiveTask', task.id)"
        @pinTask="$emit('pinTask', task.id)"
      />
    </div>
  </div>
</template>

<script>
import Task from './Task';
export default {
  name: 'PureTaskList',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    tasks: {
      type: Array,
      default: () => []
    }
  },
  components: {
    Task
  },
  computed: {
    noTasks() {
      return this.tasks.length === 0;
    },
    taskLoadDone() {
      return !this.loading && !this.noTasks;
    },
    tasksInOrder() {
      return [
        ...this.tasks.filter(t => t.state === 'TASK_PINNED'),
        ...this.tasks.filter(t => t.state !== 'TASK_PINNED'),
      ];
    },
  }
}
</script>