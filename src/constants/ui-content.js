export const UI_CONTENT = {
  GLOBAL: {
    BUTTON_LABEL_CREATE_FLOW: 'Create new flow',
    BUTTON_LABEL_EDIT_MODE: 'Edit mode',
    BUTTON_LABEL_EDIT_SETTINGS: 'Settings',
    BUTTON_LABEL_EXPORT_FLOW: 'Export flow as JSON',
    BUTTON_LABEL_AUDIT_LOG: 'Audit log',
    BUTTON_LABEL_EDIT_DISCARD: 'Discard changes',
    BUTTON_LABEL_EDIT_PERSIST: 'Save changes',
    BUTTON_LABEL_PREVIEW: 'Preview',
    BUTTON_LABEL_PREVIEW_EXIT: 'Keep editing',
    BUTTON_LABEL_INLINE_MODE: 'Inline',
    BUTTON_LABEL_STACKED_MODE: 'Stacked',
    BUTTON_LABEL_HELP: 'Help',
  },
  HELP_MODAL: {
    ABOUT: {
      appName: 'Pathpoint',
      blurb: 'Mapping business flow to telemetry signals',
      moreInfo: {
        link: 'https://newrelic.com/platform/pathpoint',
        text: 'Find out more',
      },
    },
    URLS: {
      docs: 'https://docs.newrelic.com/docs/new-relic-solutions/business-observability/intro-pathpoint/',
      createIssue:
        'https://github.com/newrelic/nr-labs-pathpoint/issues/new?labels=bug&template=bug_report.md',
      createFeature:
        'https://github.com/newrelic/nr-labs-pathpoint/issues/new?labels=enhancement&template=enhancement.md',
      createQuestion:
        'https://github.com/newrelic/nr-labs-pathpoint/discussions',
    },
  },
  FLOW: {
    BUTTON_EXPORT: 'Export JSON',
    CURRENT_STATUS: 'Showing current health',
    NO_STAGES: {
      TITLE: 'No stages yet.',
      DESCRIPTION:
        'A stage represents a high-level functional category in the flow, which consists of multiple steps to complete.',
    },
  },
  STAGE: {
    FALLBACK_NAME: '(unnamed stage)',
    TOOLTIP: 'A high-level functional category in the flow',
    MISSING_SIGNALS: 'Includes missing signals',
    NO_ACCESS_SIGNALS: "Includes signals you don't have access to",
    TOO_MANY_SIGNALS:
      'You have steps exceeding the signal limits. Check your signal definition.',
    NO_LEVELS: {
      TITLE: 'No levels yet.',
      DESCRIPTION:
        'A level collects the potential alternate paths a user may traverse as they progress through this level of the stage.',
    },
  },
  LEVEL: {
    TOOLTIP:
      'Collection of potential paths a user may traverse through this stage',
    NO_STEPS: {
      TITLE: 'No steps yet.',
      DESCRIPTION:
        'A step is an individual gate in the path, usually representing in aggregate an underlying system.',
    },
  },
  STEP: {
    DEFAULT_TITLE: 'Untitled step',
    NO_SIGNALS: {
      TITLE: 'No signals yet',
      DESCRIPTION:
        'A signal is an entity or alert that reflects the underlying health of its parent step.',
    },
  },
  SIGNAL: {
    DEFAULT_NAME: '(unknown)',
    TOO_MANY: {
      HEADING: 'Steps going above signals limit',
      DETAILS:
        'The following steps exceed the signal limits. Not all signals are being evaluated as part of the flow. We recommend modifying the signal definition to get under the signal limits.',
    },
    MISSING: {
      HEADING: 'Missing signals',
      DETAILS:
        'No response recieved for these signals. It could be that these signals no longer exist.',
    },
    DETAILS: {
      NO_INCIDENTS: 'No open incidents from past 30 days',
      NOT_FOUND_IN_TIMERANGE:
        'No incidents were found for the selected time period.',
      FOUND_RECENT:
        'The incident displayed below is the most recent incident located.',
      NO_RECENT_INCIDENTS: 'No open incidents to display.',
      LATEST_RECENT_INCIDENT:
        'No open incidents. Showing the most recent incident.',
    },
  },
  KPI_BAR: {
    TITLE: 'Flow KPIs',
    TITLE_TOOLTIP: 'Business performance metrics',
  },
  KPI_MODAL: {
    EMPTY_STATE_ADDITIONAL_LINK_LABEL: 'See our NRQL reference',
    EMPTY_STATE_ADDITIONAL_LINK_URL:
      'https://docs.newrelic.com/docs/query-your-data/nrql-new-relic-query-language/get-started/nrql-syntax-clauses-functions/',

    // emptystate error messages
    EMPTY_STATE_MESSAGE_TITLE_1: 'No preview available yet', // invalid accountId or missing query
    EMPTY_STATE_MESSAGE_TITLE_2: 'Error!', // other errors

    EMPTY_STATUS_MESSAGE_DESC_1: 'At least one account must be selected', // invalid accountId
    EMPTY_STATUS_MESSAGE_DESC_2: 'Enter and run a query to preview the result', // missing query

    // billboard related messages
    BILLBOARD_DOC_LINK:
      'https://docs.newrelic.com/docs/query-your-data/explore-query-data/use-charts/chart-types/#widget-billboard',
    NRQL_EDITOR_INSTRUCTIONS_HEADING: 'Instructions',
    NRQL_EDITOR_INSTRUCTIONS:
      'Enter a query which returns a single number. You could use queries that return Apdex values, or compare a single value across states to show the upward/downward trend.',
    BILLBOARD_HELP_TITLE: 'Sample Queries: ',
    BILLBOARD_HELP_QUERY_EXAMPLE: [
      'SELECT count(*) FROM Transaction since 1 hour ago',
      'SELECT count(*) FROM Pageview since 3 hours ago COMPARE WITH 2 days ago',
      'SELECT count(session) FROM Pageview since 1 hour ago COMPARE WITH 1 day ago',
    ],
    QUERY_PROMPT: 'Enter query here',
  },
  GET_STARTED: {
    HEADING: 'Pathpoint',
    DESCRIPTION:
      'Pathpoint is an enterprise platform tracker that offers a unique approach to business journey observability. It models system health in relation to actual user-impacting business stages.',
    BUTTON_LABEL_GET_STARTED: 'Get started',
    BUTTON_LABEL_GO_BACK: 'Go back',
    LINK_LABEL: 'See our docs',
    LINK_URL: 'https://github.com/newrelic/hedgehog/...',
  },
  FLOW_OVERVIEW: {
    //
  },
  GUIDED_VIEW: {
    FLOW: {
      TITLE: 'This is a demo flow',
      DESCRIPTION:
        "A flow maps an organization's customer journey, optimizing business observability.",
      BUTTON_LABEL_SKIP_TOUR: 'Skip tour',
      BUTTON_LABEL_PREVIOUS: 'Previous',
      BUTTON_LABEL_NEXT: 'Next',
    },
    STAGE: {
      TITLE: 'This is a stage.',
      DESCRIPTION:
        'A stage represents a high-level functional category in the flow, which consists of multiple steps to complete.',
      BUTTON_LABEL_SKIP_TOUR: 'Skip tour',
      BUTTON_LABEL_PREVIOUS: 'Previous',
      BUTTON_LABEL_NEXT: 'Next',
    },
    LEVEL: {
      TITLE: 'This is a level',
      DESCRIPTION:
        'A level collects the potential alternate paths a user may traverse as they progress through this level of the stage. Levels are depicted in numerical order.',
      BUTTON_LABEL_SKIP_TOUR: 'Skip tour',
      BUTTON_LABEL_PREVIOUS: 'Previous',
      BUTTON_LABEL_NEXT: 'Next',
    },
    STEP: {
      TITLE: 'This is a step',
      DESCRIPTION:
        'A step is an individual gate in the path, usually representing in aggregate an underlying system. Click to expand the step.',
      BUTTON_LABEL_SKIP_TOUR: 'Skip tour',
      BUTTON_LABEL_PREVIOUS: 'Previous',
      BUTTON_LABEL_NEXT: 'Next',
    },
    SIGNAL: {
      TITLE: 'This is a signal',
      DESCRIPTION:
        'A signal is a service level that reflects the underlying health of its parent step.',
      BUTTON_LABEL_SKIP_TOUR: 'Skip tour',
      BUTTON_LABEL_PREVIOUS: 'Previous',
      BUTTON_LABEL_NEXT: 'Next',
    },
    FLOW_KPIS: {
      TITLE: 'These are flow KPIs.',
      DESCRIPTION:
        'A flow KPI lets you measure attainment against a target business objective of the overall flow.',
      BUTTON_LABEL_SKIP_TOUR: 'Skip tour',
      BUTTON_LABEL_PREVIOUS: 'Previous',
      BUTTON_LABEL_NEXT: 'Next',
    },
  },
  SIGNAL_SELECTION: {
    ENTITY_TYPE_DROPDOWN_PLACEHOLDER: 'Select entity type',
    TOO_MANY_ENTITIES_EMPTY_STATE: {
      TITLE: 'Too many signals',
      DESCRIPTION:
        'Please use the filtering options above to load your signal list.',
    },
    SIGNALS_NOT_FOUND: {
      TITLE: 'No signals found',
      DESCRIPTION: 'There were no matching signals with the specified criteria',
    },
    SIGNALS_LOADING: 'Loading signals...',
    TOO_MANY_ENTITIES_ERROR_MESSAGE:
      'Note: You exceeded your signal limit. Remove entities or convert to workload to save changes.',
  },
  DUMMY_FILTER: "`tags.displayName` = 'project hedgehog'",
};
