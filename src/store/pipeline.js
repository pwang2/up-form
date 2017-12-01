const state = {
  configuration: [
    {
      name: 'executionMode',
      value: 'STANDALONE'
    },
    {
      name: 'deliveryGuarantee',
      value: 'AT_LEAST_ONCE'
    },
    {
      name: 'shouldRetry',
      value: true
    },
    {
      name: 'retryAttempts',
      value: -1
    },
    {
      name: 'memoryLimit',
      value: '${jvm:maxMemoryMB() * 0.65}'
    },
    {
      name: 'memoryLimitExceeded',
      value: 'STOP_PIPELINE'
    },
    {
      name: 'notifyOnStates',
      value: ['RUN_ERROR', 'STOPPED', 'FINISHED']
    },
    {
      name: 'emailIDs',
      value: ['pwang2@live.com']
    },
    {
      name: 'constants',
      value: []
    },
    {
      name: 'badRecordsHandling',
      value:
        'streamsets-datacollector-basic-lib::com_streamsets_pipeline_stage_destination_devnull_ToErrorNullDTarget::1'
    },
    {
      name: 'clusterSlaveMemory',
      value: 1024
    },
    {
      name: 'clusterSlaveJavaOpts',
      value: '-XX:+UseConcMarkSweepGC -XX:+UseParNewGC -Dlog4j.debug'
    },
    {
      name: 'clusterLauncherEnv',
      value: []
    },
    {
      name: 'mesosDispatcherURL',
      value: null
    },
    {
      name: 'hdfsS3ConfDir',
      value: null
    },
    {
      name: 'rateLimit',
      value: 0
    },
    {
      name: 'maxRunners',
      value: 0
    },
    {
      name: 'webhookConfigs',
      value: []
    },
    {
      name: 'statsAggregatorStage',
      value:
        'streamsets-datacollector-basic-lib::com_streamsets_pipeline_stage_destination_devnull_StatsDpmDirectlyDTarget::1'
    },
    {
      name: 'workerCount',
      value: 0
    },
    {
      name: 'startEventStage',
      value:
        'streamsets-datacollector-basic-lib::com_streamsets_pipeline_stage_destination_devnull_ToErrorNullDTarget::1'
    },
    {
      name: 'stopEventStage',
      value:
        'streamsets-datacollector-basic-lib::com_streamsets_pipeline_stage_destination_devnull_ToErrorNullDTarget::1'
    },
    {
      name: 'errorRecordPolicy',
      value: 'ORIGINAL_RECORD'
    },
    {
      name: 'sparkConfigs',
      value: []
    }
  ]
};

export default {
  state
};
