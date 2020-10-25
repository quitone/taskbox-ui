<template>
  <div>
    <pure-task-list :tasks="tasks" @archiveTask="archiveTask" @pinTask="pinTask" />
  </div>
</template>

<script>
import PureTaskList from './PureTaskList';
import { mapActions, mapState } from 'vuex';
export default {
  name: 'TaskList',
  components: {
    PureTaskList
  },
  computed: {
    ...mapState([ 'tasks' ]),
  },
  methods: {
    ...mapActions([ 'pinTask', 'archiveTask' ])
  }
}
</script>