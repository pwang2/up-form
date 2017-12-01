var state = {
  configDefinitions: [
    {
      fieldName: 'executionMode',
      mode: 'text/plain',
      description: '',
      required: true,
      label: 'Execution Mode',
      group: '',
      dependsOnMap: {},
      dependsOn: '',
      model: {
        labels: [
          'Standalone',
          'Cluster Batch',
          'Cluster Yarn Streaming',
          'Cluster Mesos Streaming'
        ],
        values: [
          'STANDALONE',
          'CLUSTER_BATCH',
          'CLUSTER_YARN_STREAMING',
          'CLUSTER_MESOS_STREAMING'
        ],
        modelType: 'VALUE_CHOOSER',
        configDefinitions: null,
        valuesProviderClass:
          'com.streamsets.datacollector.config.ExecutionModeChooserValues'
      },
      lines: 0,
      triggeredByValues: null,
      displayPosition: 10,
      evaluation: 'IMPLICIT',
      name: 'executionMode',
      type: 'MODEL',
      defaultValue: 'STANDALONE'
    },
    {
      fieldName: 'deliveryGuarantee',
      mode: 'text/plain',
      description: '',
      required: true,
      label: 'Delivery Guarantee',
      group: '',
      dependsOnMap: {},
      dependsOn: '',
      model: {
        labels: ['At Least Once', 'At Most Once'],
        values: ['AT_LEAST_ONCE', 'AT_MOST_ONCE'],
        modelType: 'VALUE_CHOOSER',
        configDefinitions: null,
        valuesProviderClass:
          'com.streamsets.datacollector.config.DeliveryGuaranteeChooserValues'
      },
      lines: 0,
      triggeredByValues: null,
      displayPosition: 20,
      evaluation: 'IMPLICIT',
      name: 'deliveryGuarantee',
      type: 'MODEL',
      defaultValue: 'AT_LEAST_ONCE'
    },
    {
      fieldName: 'startEventStage',
      mode: 'text/plain',
      description: 'Stage that should handle pipeline start event.',
      required: false,
      label: 'Start Event',
      elDefs: null,
      group: '',
      dependsOnMap: {},
      dependsOn: '',
      model: {
        labels: [
          'Discard (Library: Basic)',
          'Email Executor (Library: Basic)',
          'Shell (Library: Basic)',
          'Write to Another Pipeline (Library: Basic)'
        ],
        values: [
          'streamsets-datacollector-basic-lib::com_streamsets_pipeline_stage_destination_devnull_ToErrorNullDTarget::1',
          'streamsets-datacollector-basic-lib::com_streamsets_pipeline_stage_executor_emailexecutor_EmailDExecutor::1',
          'streamsets-datacollector-basic-lib::com_streamsets_pipeline_stage_executor_shell_ShellDExecutor::1',
          'streamsets-datacollector-basic-lib::com_streamsets_pipeline_stage_destination_sdcipc_ToErrorSdcIpcDTarget::2'
        ],
        modelType: 'VALUE_CHOOSER',
        configDefinitions: null,
        valuesProviderClass:
          'com.streamsets.datacollector.config.PipelineLifecycleStageChooserValues'
      },
      lines: 0,
      triggeredByValues: null,
      displayPosition: 23,
      evaluation: 'IMPLICIT',
      name: 'startEventStage',
      type: 'MODEL',
      defaultValue:
        'streamsets-datacollector-basic-lib::com_streamsets_pipeline_stage_destination_devnull_ToErrorNullDTarget::1'
    },
    {
      fieldName: 'stopEventStage',
      mode: 'text/plain',
      description: 'Stage that should handle pipeline stop event.',
      required: false,
      label: 'Stop Event',
      elDefs: null,
      group: '',
      dependsOnMap: {},
      dependsOn: '',
      model: {
        labels: [
          'Discard (Library: Basic)',
          'Email Executor (Library: Basic)',
          'Shell (Library: Basic)',
          'Write to Another Pipeline (Library: Basic)'
        ],
        values: [
          'streamsets-datacollector-basic-lib::com_streamsets_pipeline_stage_destination_devnull_ToErrorNullDTarget::1',
          'streamsets-datacollector-basic-lib::com_streamsets_pipeline_stage_executor_emailexecutor_EmailDExecutor::1',
          'streamsets-datacollector-basic-lib::com_streamsets_pipeline_stage_executor_shell_ShellDExecutor::1',
          'streamsets-datacollector-basic-lib::com_streamsets_pipeline_stage_destination_sdcipc_ToErrorSdcIpcDTarget::2'
        ],
        modelType: 'VALUE_CHOOSER',
        configDefinitions: null,
        valuesProviderClass:
          'com.streamsets.datacollector.config.PipelineLifecycleStageChooserValues'
      },
      lines: 0,
      triggeredByValues: null,
      displayPosition: 26,
      evaluation: 'IMPLICIT',
      name: 'stopEventStage',
      type: 'MODEL',
      defaultValue:
        'streamsets-datacollector-basic-lib::com_streamsets_pipeline_stage_destination_devnull_ToErrorNullDTarget::1'
    },
    {
      fieldName: 'shouldRetry',
      mode: 'text/plain',
      description: '',
      required: true,
      label: 'Retry Pipeline on Error',
      elDefs: null,
      group: '',
      dependsOnMap: {},
      dependsOn: '',
      model: null,
      lines: 0,
      triggeredByValues: null,
      displayPosition: 30,
      evaluation: 'IMPLICIT',
      name: 'shouldRetry',
      type: 'BOOLEAN',
      defaultValue: true
    },
    {
      fieldName: 'retryAttempts',
      mode: 'text/plain',
      description:
        'Max no of retries. To retry indefinitely, use -1. The wait time between retries starts at 15 seconds and doubles until reaching 5 minutes.',
      required: false,
      label: 'Retry Attempts',
      group: '',
      dependsOnMap: {
        shouldRetry: [true]
      },
      dependsOn: '',
      model: null,
      lines: 0,
      triggeredByValues: null,
      displayPosition: 30,
      evaluation: 'IMPLICIT',
      name: 'retryAttempts',
      type: 'NUMBER',
      defaultValue: -1
    },
    {
      fieldName: 'memoryLimit',
      mode: 'text/plain',
      description:
        'Maximum amount of memory the pipeline can use. Configure in relationship to the SDC Java heap size. The default is 650 and a value of 0 or less disables the limit.',
      required: true,
      label: 'Max Pipeline Memory (MB)',
      group: '',
      dependsOnMap: {},
      dependsOn: '',
      model: null,
      lines: 0,
      triggeredByValues: null,
      displayPosition: 60,
      evaluation: 'IMPLICIT',
      name: 'memoryLimit',
      type: 'NUMBER',
      defaultValue: '${jvm:maxMemoryMB() * 0.65}'
    },
    {
      fieldName: 'memoryLimitExceeded',
      mode: 'text/plain',
      description:
        'Behavior when the pipeline exceeds the memory limit. Tip: Configure an alert to indicate when the memory use approaches the limit.',
      required: true,
      label: 'On Memory Exceeded',
      group: '',
      dependsOnMap: {},
      dependsOn: '',
      model: {
        labels: ['Log', 'Log and alert', 'Log, alert and stop pipeline'],
        values: ['LOG', 'ALERT', 'STOP_PIPELINE'],
        modelType: 'VALUE_CHOOSER',
        configDefinitions: null,
        valuesProviderClass:
          'com.streamsets.datacollector.config.MemoryLimitExceededChooserValues'
      },
      lines: 0,
      triggeredByValues: null,
      displayPosition: 70,
      evaluation: 'IMPLICIT',
      name: 'memoryLimitExceeded',
      type: 'MODEL',
      defaultValue: 'STOP_PIPELINE'
    },
    {
      fieldName: 'notifyOnStates',
      mode: 'text/plain',
      description:
        'Notifies via email when pipeline gets to the specified states',
      required: false,
      label: 'Notify on Pipeline State Changes',
      group: 'NOTIFICATIONS',
      dependsOnMap: {},
      dependsOn: '',
      model: {
        labels: [
          'Running',
          'Start Error',
          'Run Error',
          'Stopped',
          'Finished',
          'Disconnected',
          'Connecting'
        ],
        values: [
          'RUNNING',
          'START_ERROR',
          'RUN_ERROR',
          'STOPPED',
          'FINISHED',
          'DISCONNECTED',
          'CONNECTING'
        ],
        modelType: 'MULTI_VALUE_CHOOSER',
        configDefinitions: null,
        valuesProviderClass:
          'com.streamsets.datacollector.config.PipelineStateChooserValues'
      },
      lines: 0,
      triggeredByValues: null,
      displayPosition: 75,
      evaluation: 'IMPLICIT',
      name: 'notifyOnStates',
      type: 'MODEL',
      defaultValue: ['RUN_ERROR', 'STOPPED', 'FINISHED']
    },
    {
      fieldName: 'emailIDs',
      mode: 'text/plain',
      description: 'Email Addresses',
      required: false,
      label: 'Email IDs',
      group: 'NOTIFICATIONS',
      dependsOnMap: {},
      dependsOn: '',
      model: null,
      lines: 0,
      triggeredByValues: null,
      displayPosition: 76,
      evaluation: 'IMPLICIT',
      name: 'emailIDs',
      type: 'LIST',
      defaultValue: []
    },
    {
      fieldName: 'constants',
      mode: 'text/plain',
      description: '',
      required: false,
      label: 'Parameters',
      group: 'PARAMETERS',
      dependsOnMap: {},
      dependsOn: '',
      model: null,
      lines: 0,
      triggeredByValues: null,
      displayPosition: 80,
      evaluation: 'IMPLICIT',
      name: 'constants',
      type: 'MAP',
      defaultValue: []
    },
    {
      fieldName: 'badRecordsHandling',
      mode: 'text/plain',
      description: '',
      required: true,
      label: 'Error Records',
      group: 'BAD_RECORDS',
      dependsOnMap: {},
      dependsOn: '',
      model: {
        labels: [
          'Discard (Library: Basic)',
          'Write to Another Pipeline (Library: Basic)',
          'Write to File (Library: Basic)'
        ],
        values: [
          'streamsets-datacollector-basic-lib::com_streamsets_pipeline_stage_destination_devnull_ToErrorNullDTarget::1',
          'streamsets-datacollector-basic-lib::com_streamsets_pipeline_stage_destination_sdcipc_ToErrorSdcIpcDTarget::2',
          'streamsets-datacollector-basic-lib::com_streamsets_pipeline_stage_destination_recordstolocalfilesystem_ToErrorLocalFSDTarget::1'
        ],
        modelType: 'VALUE_CHOOSER',
        configDefinitions: null,
        valuesProviderClass:
          'com.streamsets.datacollector.config.ErrorHandlingChooserValues'
      },
      lines: 0,
      triggeredByValues: null,
      displayPosition: 90,
      evaluation: 'IMPLICIT',
      name: 'badRecordsHandling',
      type: 'MODEL',
      defaultValue: null
    },
    {
      fieldName: 'errorRecordPolicy',
      mode: 'text/plain',
      description: 'Determines which variation of the record is sent to error.',
      required: true,
      label: 'Error Record Policy',
      group: 'BAD_RECORDS',
      dependsOnMap: {},
      dependsOn: '',
      model: {
        labels: [
          'Original record as it was generated by the origin.',
          'Record as it was seen by the stage that sent it to error stream.'
        ],
        values: ['ORIGINAL_RECORD', 'STAGE_RECORD'],
        modelType: 'VALUE_CHOOSER',
        configDefinitions: null,
        valuesProviderClass:
          'com.streamsets.datacollector.config.ErrorRecordPolicyChooserValues'
      },
      lines: 0,
      triggeredByValues: null,
      displayPosition: 93,
      evaluation: 'IMPLICIT',
      name: 'errorRecordPolicy',
      type: 'MODEL',
      defaultValue: 'ORIGINAL_RECORD'
    },
    {
      fieldName: 'statsAggregatorStage',
      mode: 'text/plain',
      description: '',
      required: false,
      label: 'Statistics Aggregator',
      group: 'STATS',
      dependsOnMap: {},
      dependsOn: '',
      model: {
        labels: [
          'Discard (Library: Basic)',
          'Write to DPM directly (Library: Basic)',
          'Write to SDC RPC (Library: Basic)'
        ],
        values: [
          'streamsets-datacollector-basic-lib::com_streamsets_pipeline_stage_destination_devnull_StatsNullDTarget::1',
          'streamsets-datacollector-basic-lib::com_streamsets_pipeline_stage_destination_devnull_StatsDpmDirectlyDTarget::1',
          'streamsets-datacollector-basic-lib::com_streamsets_pipeline_stage_destination_sdcipc_StatsSdcIpcDTarget::2'
        ],
        modelType: 'VALUE_CHOOSER',
        configDefinitions: null,
        valuesProviderClass:
          'com.streamsets.datacollector.config.StatsTargetChooserValues'
      },
      lines: 0,
      triggeredByValues: null,
      displayPosition: 95,
      evaluation: 'IMPLICIT',
      name: 'statsAggregatorStage',
      type: 'MODEL',
      defaultValue:
        'streamsets-datacollector-basic-lib::com_streamsets_pipeline_stage_destination_devnull_StatsNullDTarget::1'
    },
    {
      fieldName: 'workerCount',
      mode: 'text/plain',
      description:
        'Number of workers. 0 to start as many workers as Kafka partitions for topic.',
      required: true,
      label: 'Worker Count',
      group: 'CLUSTER',
      dependsOnMap: {
        executionMode: ['CLUSTER_YARN_STREAMING']
      },
      dependsOn: '',
      model: null,
      lines: 0,
      triggeredByValues: null,
      displayPosition: 100,
      evaluation: 'IMPLICIT',
      name: 'workerCount',
      type: 'NUMBER',
      defaultValue: 0
    },
    {
      fieldName: 'clusterSlaveMemory',
      mode: 'text/plain',
      description: '',
      required: true,
      label: 'Worker Memory (MB)',
      group: 'CLUSTER',
      dependsOnMap: {
        executionMode: ['CLUSTER_YARN_STREAMING', 'CLUSTER_BATCH']
      },
      dependsOn: '',
      model: null,
      lines: 0,
      triggeredByValues: null,
      displayPosition: 150,
      evaluation: 'IMPLICIT',
      name: 'clusterSlaveMemory',
      type: 'NUMBER',
      defaultValue: 1024
    },
    {
      fieldName: 'clusterSlaveJavaOpts',
      mode: 'text/plain',
      description:
        'Add properties as needed. Changes to default settings are not recommended.',
      required: true,
      label: 'Worker Java Options',
      group: 'CLUSTER',
      dependsOnMap: {
        executionMode: ['CLUSTER_YARN_STREAMING', 'CLUSTER_BATCH']
      },
      dependsOn: '',
      model: null,
      lines: 0,
      triggeredByValues: null,
      displayPosition: 110,
      evaluation: 'IMPLICIT',
      name: 'clusterSlaveJavaOpts',
      type: 'STRING',
      defaultValue: '-XX:+UseConcMarkSweepGC -XX:+UseParNewGC -Dlog4j.debug'
    },
    {
      fieldName: 'clusterLauncherEnv',
      mode: 'text/plain',
      description:
        'Sets additional environment variables for the cluster launcher',
      required: false,
      label: 'Launcher ENV',
      group: 'CLUSTER',
      dependsOnMap: {
        executionMode: ['CLUSTER_YARN_STREAMING', 'CLUSTER_BATCH']
      },
      dependsOn: '',
      model: null,
      lines: 0,
      triggeredByValues: null,
      displayPosition: 120,
      evaluation: 'IMPLICIT',
      name: 'clusterLauncherEnv',
      type: 'MAP',
      defaultValue: []
    },
    {
      fieldName: 'mesosDispatcherURL',
      mode: 'text/plain',
      description: 'URL for service which launches Mesos framework',
      required: true,
      label: 'Mesos Dispatcher URL',
      group: 'CLUSTER',
      dependsOnMap: {
        executionMode: ['CLUSTER_MESOS_STREAMING']
      },
      dependsOn: '',
      model: null,
      lines: 0,
      triggeredByValues: null,
      displayPosition: 130,
      evaluation: 'IMPLICIT',
      name: 'mesosDispatcherURL',
      type: 'STRING',
      defaultValue: null
    },
    {
      fieldName: 'hdfsS3ConfDir',
      mode: 'text/plain',
      description:
        'An SDC resource directory or symbolic link with HDFS/S3 configuration files core-site.xml and hdfs-site.xml',
      required: true,
      label: 'Checkpoint Configuration Directory',
      group: 'CLUSTER',
      dependsOnMap: {
        executionMode: ['CLUSTER_MESOS_STREAMING']
      },
      dependsOn: '',
      model: null,
      lines: 0,
      triggeredByValues: null,
      displayPosition: 150,
      evaluation: 'IMPLICIT',
      name: 'hdfsS3ConfDir',
      type: 'STRING',
      defaultValue: null
    },
    {
      fieldName: 'rateLimit',
      mode: 'text/plain',
      description:
        'Maximum number of records per second that should be accepted into the pipeline. Rate is not limited if this is not set, or is set to 0',
      required: false,
      label: 'Rate Limit (records / sec)',
      group: '',
      dependsOnMap: {},
      dependsOn: '',
      model: null,
      lines: 0,
      triggeredByValues: null,
      displayPosition: 180,
      evaluation: 'IMPLICIT',
      name: 'rateLimit',
      type: 'NUMBER',
      defaultValue: 0
    },
    {
      fieldName: 'maxRunners',
      mode: 'text/plain',
      description:
        'Maximum number of runners that should be created for this pipeline. Use 0 to not impose limit.',
      required: false,
      label: 'Max runners',
      group: '',
      dependsOnMap: {},
      dependsOn: '',
      model: null,
      lines: 0,
      triggeredByValues: null,
      displayPosition: 190,
      evaluation: 'IMPLICIT',
      name: 'maxRunners',
      type: 'NUMBER',
      defaultValue: 0
    },
    {
      fieldName: 'webhookConfigs',
      mode: 'text/plain',
      description: 'Webhooks',
      required: true,
      label: 'Webhooks',
      group: 'NOTIFICATIONS',
      dependsOnMap: {},
      dependsOn: '',
      model: {
        labels: null,
        values: null,
        modelType: 'LIST_BEAN',
        configDefinitions: [
          {
            fieldName: 'payload',
            mode: 'application/json',
            description:
              'Data that should be included as a part of the Webhook request',
            required: false,
            label: 'Payload',
            group: 'NOTIFICATIONS',
            dependsOnMap: {
              httpMethod: ['POST', 'DELETE', 'PUT']
            },
            dependsOn: '',
            model: null,
            lines: 2,
            triggeredByValues: null,
            displayPosition: 240,
            evaluation: 'IMPLICIT',
            name: 'payload',
            type: 'TEXT',
            defaultValue:
              '{\n  "text" : "Pipeline \'{{PIPELINE_TITLE}}\' state changed to {{PIPELINE_STATE}} at {{TIME}}. \\n <{{PIPELINE_URL}}|Click here> for details!",\n  "fields": [\n    \t{\n\t\t\t"title": "Pipeline Status Message", \n\t\t\t"value": "{{PIPELINE_STATE_MESSAGE}}",\n      \t\t"short": true\n\t\t},\n\t\t{\n\t\t\t"title": "Pipeline Input Records Count", \n\t\t\t"value": "{{PIPELINE_INPUT_RECORDS_COUNT}}",\n            "short": true\n\t\t},\n\t\t{\n\t\t\t"title": "Pipeline Output Records Count", \n\t\t\t"value": "{{PIPELINE_OUTPUT_RECORDS_COUNT}}",\n            "short": true\n\t\t},\n\t\t{\n\t\t\t"title": "Pipeline Error Records Count", \n\t\t\t"value": "{{PIPELINE_ERROR_RECORDS_COUNT}}",\n            "short": true\n\t\t},\n\t\t{\n\t\t\t"title": "Pipeline Error Messages Count", \n\t\t\t"value": "{{PIPELINE_ERROR_MESSAGES_COUNT}}",\n            "short": true\n\t\t},\n\t\t{\n\t\t\t"title": "Pipeline Runtime Parameters", \n\t\t\t"value": "{{PIPELINE_RUNTIME_PARAMETERS}}",\n          \t"short": true\n\t\t}\n\t]\n}'
          },
          {
            fieldName: 'webhookUrl',
            mode: 'text/plain',
            description: 'The Webhook HTTP resource URL',
            required: false,
            label: 'Webhook URL',
            group: '',
            dependsOnMap: {},
            dependsOn: '',
            model: null,
            lines: 0,
            triggeredByValues: null,
            displayPosition: 200,
            evaluation: 'IMPLICIT',
            name: 'webhookUrl',
            type: 'STRING',
            defaultValue: null
          },
          {
            fieldName: 'headers',
            mode: 'text/plain',
            description: 'Headers to include in the request',
            required: false,
            label: 'Headers',
            group: 'NOTIFICATIONS',
            dependsOnMap: {},
            dependsOn: '',
            model: null,
            lines: 0,
            triggeredByValues: null,
            displayPosition: 210,
            evaluation: 'IMPLICIT',
            name: 'headers',
            type: 'MAP',
            defaultValue: []
          },
          {
            fieldName: 'httpMethod',
            mode: 'text/plain',
            description: 'HTTP method to send',
            required: true,
            label: 'HTTP Method',
            group: 'NOTIFICATIONS',
            dependsOnMap: {},
            dependsOn: '',
            model: {
              labels: ['GET', 'PUT', 'POST', 'DELETE', 'HEAD'],
              values: ['GET', 'PUT', 'POST', 'DELETE', 'HEAD'],
              modelType: 'VALUE_CHOOSER',
              configDefinitions: null,
              valuesProviderClass:
                'com.streamsets.datacollector.config.HttpMethodChooserValues'
            },
            lines: 0,
            triggeredByValues: null,
            displayPosition: 220,
            evaluation: 'IMPLICIT',
            name: 'httpMethod',
            type: 'MODEL',
            defaultValue: 'POST'
          },
          {
            fieldName: 'contentType',
            mode: 'text/plain',
            description:
              'Content-Type header to be sent with the request; used if that header is not already present',
            required: false,
            label: 'Content Type',
            group: 'NOTIFICATIONS',
            dependsOnMap: {
              httpMethod: ['POST', 'DELETE', 'PUT']
            },
            dependsOn: '',
            model: null,
            lines: 0,
            triggeredByValues: null,
            displayPosition: 250,
            evaluation: 'EXPLICIT',
            name: 'contentType',
            type: 'STRING',
            defaultValue: 'application/json'
          },
          {
            fieldName: 'authType',
            mode: 'text/plain',
            description: '',
            required: true,
            label: 'Authentication Type',
            group: 'NOTIFICATIONS',
            dependsOnMap: {},
            dependsOn: '',
            model: {
              labels: ['None', 'Basic', 'Digest', 'Universal'],
              values: ['NONE', 'BASIC', 'DIGEST', 'UNIVERSAL'],
              modelType: 'VALUE_CHOOSER',
              configDefinitions: null,
              valuesProviderClass:
                'com.streamsets.datacollector.config.AuthenticationTypeChooserValues'
            },
            lines: 0,
            triggeredByValues: null,
            displayPosition: 260,
            evaluation: 'IMPLICIT',
            name: 'authType',
            type: 'MODEL',
            defaultValue: 'NONE'
          },
          {
            fieldName: 'username',
            mode: 'text/plain',
            description: '',
            required: true,
            label: 'Username',
            group: 'NOTIFICATIONS',
            dependsOnMap: {
              authType: ['BASIC', 'DIGEST', 'UNIVERSAL']
            },
            dependsOn: '',
            model: null,
            lines: 0,
            triggeredByValues: null,
            displayPosition: 270,
            evaluation: 'IMPLICIT',
            name: 'username',
            type: 'STRING',
            defaultValue: null
          },
          {
            fieldName: 'password',
            mode: 'text/plain',
            description: '',
            required: true,
            label: 'Password',
            group: 'NOTIFICATIONS',
            dependsOnMap: {
              authType: ['BASIC', 'DIGEST', 'UNIVERSAL']
            },
            dependsOn: '',
            model: null,
            lines: 0,
            triggeredByValues: null,
            displayPosition: 280,
            evaluation: 'IMPLICIT',
            name: 'password',
            type: 'STRING',
            defaultValue: null
          }
        ],
        valuesProviderClass: null
      },
      lines: 0,
      triggeredByValues: null,
      displayPosition: 210,
      evaluation: 'IMPLICIT',
      name: 'webhookConfigs',
      type: 'MODEL',
      defaultValue: []
    },
    {
      fieldName: 'sparkConfigs',
      mode: 'text/plain',
      description:
        'Additional Spark Configuration to pass to the spark-submit script, the parameters will be passed as --conf <key>=<value>',
      required: false,
      label: 'Extra Spark Configuration',
      group: 'CLUSTER',
      dependsOnMap: {
        executionMode: ['CLUSTER_YARN_STREAMING']
      },
      dependsOn: '',
      model: null,
      lines: 0,
      triggeredByValues: null,
      displayPosition: 220,
      evaluation: 'IMPLICIT',
      name: 'sparkConfigs',
      type: 'MAP',
      defaultValue: []
    }
  ]
};
export default {
  state
};
