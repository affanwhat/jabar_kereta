define({
  root: ({
    settings: "Settings",
    addSearch: "Add a Search Layer",
    updateSearch: "Update Search Layer",
    addBuffer: "Add Buffer Defaults",
    updateBuffer: "Buffer Defaults",
    addSearchExpr: "Add an Expression",
    updateSearchExpr: "Update Expression",
    addExpressionValue: "Add Expression Value",
    updateExpressionValue: "Update Expression Value",
    addExpression: "Add Expression",
    addLink: "Add Link",
    addRelate: "Add Relate",
    availableRelates: "Available Relate(s)",
    choose: "Choose",
    updateLink: "Update Link",
    updateRelate: "Update Relate",
    searchTitle: "Search Title",
    expressionsTitle: "Search Expression(s)",
    linksTitle: "Search Link(s)",
    relatesTitle: "Search Relate(s)",
    bufferUnitTitle: "Buffer Unit(s)",
    spatialRelationshipTitle: "Spatial Relationship(s)",
    linkAlias: "Link Alias",
    relateAlias: "Relate Alias",
    disablenulllink: "Disable Link if Null",
    disablelinkinpopup: "Disable Link in PopUp",
    popuplinktype: "Link Type",
    linktext: "Text",
    linkimage: "Image",
    linkiconcontent: "Link Icon Content",
    linkcontent: "Link Content",
    linkiconcontenthint: "The link icon content can be text, fields, or a combination of both, that make up a valid URL\\path to the links icon image. To add fields click the blue plus button to the right of the text area.",
    linkcontenthint: "The link content can be text, fields, or a combination of both, that make up a valid URL\\path to the linked item. To add fields click the blue plus button to the right of the text area.",
    valuesTitle: "Search Expression Value(s)",
    actions: "Actions",
    zoomScale: "Zoom scale",
    back: "Back",
    sum: "Sum this fields values",
    sumlabel: "Sum Label",
    searchUrl: "Search URL",
    browse: "Browse",
    title: "Title",
    definitionexpr: "Definition Expression",
    expression: "Expression",
    searchLabel: "Search label",
    searchHint: "Search hint",
    availableFields: "Available Fields",
    name: "Name",
    alias: "Alias",
    includedFields: "Included Fields",
    cancel: "Cancel",
    ok: "OK",
    addSearch2: "Add Search",
    operationalLayerTip: "Add Result as Operational Layer",
    initialView: "Initial View",
    disableTabs: "Edit Disabled Tab(s)",
    selectFeatures: "By Shape",
    selectByAttribute: "By Attribute",
    editDefaultSym: "Default Search Symbology",
    editDefaultBuffer: "Edit Default Buffer Properties",
    editDefaultGraphical: "Edit Graphical Search Options",
    point: "Marker Default Symbol",
    line: "Line Default Symbol",
    poly: "Polygon Default Symbol",
    includeall: "Include All",
    include: "Include",
    useMultiGraphics: "enable multi part graphics checked by default",
    addTolerance: "Add search tolerance to point selection checked by default",
    keepGraphicalEnabled: "Keep graphical search tool enabled after each draw",
    autoZoom: "Auto zoom to search results",
    pointTolerance: "Tolerance to add to a graphical point search",
    searchExpressions: "Search Expressions",
    expressionAlias: "Expression Alias",
    addValue: "Add Expression Value",
    valuePrompt: "Prompt",
    valueSQL: "SQL Statement",
    valueDefault: "Default Value",
    textSearchHint: "Search Hint (Example of Value)",
    none: "None",
    string: "String",
    number: "Number",
    date: "Date",
    stringOperatorIn: "in", // e.g. <stringFieldName> in ('California', 'Arizona')
    stringOperatorIs: "is", // e.g. <stringFieldName> is 'California'
    stringOperatorIsNot: "is not",
    stringOperatorStartsWith: "starts with",
    stringOperatorEndsWith: "ends with",
    stringOperatorContains: "contains",
    stringOperatorDoesNotContain: "does not contain",
    stringOperatorIsBlank: "is blank",
    stringOperatorIsNotBlank: "is not blank",
    dateOperatorIsOn: "is on", // e.g. <dateFieldName> is on '1/1/2012'
    dateOperatorIsNotOn: "is not on",
    dateOperatorIsBefore: "is before",
    dateOperatorIsAfter: "is after",
    dateOperatorIsBeforeOrOn: "is before or on",
    dateOperatorIsAfterOrOn: "is after or on",
    dateOperatorDays: "days",
    dateOperatorWeeks: "weeks", // e.g. <dateFieldName> is the last 4 weeks
    dateOperatorMonths: "months",
    dateOperatorInTheLast: "in the last",
    dateOperatorNotInTheLast: "not in the last",
    dateOperatorIsBetween: "is between",
    dateOperatorIsNotBetween: "is not between",
    dateOperatorIsBlank: "is blank",
    dateOperatorIsNotBlank: "is not blank",
    numberOperatorIn: "in", // e.g. <stringFieldName> in (1000,2000)
    numberOperatorIs: "is", // e.g. <numberFieldName> is 1000
    numberOperatorIsNot: "is not",
    numberOperatorIsAtLeast: "is at least",
    numberOperatorIsLessThan: "is less than",
    numberOperatorIsAtMost: "is at most",
    numberOperatorIsGreaterThan: "is greater than",
    numberOperatorIsBetween: "is between",
    numberOperatorIsNotBetween: "is not between",
    numberOperatorIsBlank: "is blank",
    numberOperatorIsNotBlank: "is not blank",
    valueField: "Field",
    valueOperation: "Operation",
    valueMethod: "Method",
    all: "All",
    any: "Any",
    value: "Value",
    field: "Field",
    unique: "Unique",
    and: "and",
    operator: "Operator",
    valueTooltip: "Enter value",
    fieldTooltip: "Pick from existing field",
    uniqueValueTooltip: "Pick from unique values in selected field",
    friendlyDatePattern: "MM/dd/yyyy",
    askForValues: "Ask for values",
    prompt: "Prompt",
    hint: "Hint",
    strMatchMsgPart1: "Get features in the layer that match ",
    strMatchMsgPart2: " of this and the preceding expression criteria",
    userListMsg: "Ask for values from predefined list",
    predefinedValue: "Predefined Value(s)",
    predefinedLabel: "Predefined Label(s)",
    list: "List:",
    addListValue: "Add List Value",
    predefinedTooltip: "Pick from predefined values list",
    predefined: "Predefined",
    error: {
      invalidParams: "Invalid parameters.",
      invalidUrl: "Invalid URL.",
      noFilterFields: "Layer has no fields that can be used for filter.",
      invalidSQL: "Invalid SQL expression.",
      cantParseSQL: "Can't parse the SQL expression."
    },
    edit: "Edit field format",
    dateformat: "Date format",
    dayShortMonthYear: "Day short Month Year",
    longDate: "Long Date",
    longMonthDayYear: "Long Month Day Year",
    longMonthYear: "Long Month Year",
    shortDate: "Short Date",
    shortDateLongTime: "Short Day Long Time",
    shortDateLongTime24: "Short Day Long Time 24",
    shortDateShortTime: "Short Date Short Time",
    shortDateShortTime24: "Short Day Short Time 24",
    shortMonthYear: "Short Month Year",
    year: "Year",
    custom: "Custom",
    useutc: "Use UTC",
    currencyfield: "Currency Field",
    currencySymbol: "Currency Symbol",
    examplecurrency: "$",
    precision: "Precision",
    exampleprecision: ".",
    usethousandssep: "Use thousands separator",
    examplethousands: ",",
    overrideSQL: "Override",
    editBufferUnit: "Add or Remove Buffer Unit(s)",
    defaultBufferValue: "Default Buffer Value",
    defaultBufferWKID: "Default Buffer Spatial Reference WKID",
    bufferSymbol: "Buffer Symbol (click symbol to edit)",
    addbufferunit: "Buffer Unit(s)",
    addspatalrelationships: "Available Spatial Relationships(s)",
    addUnit: "Add\\Remove Unit",
    addRemove: "Add\\Remove",
    warning: "No Buffer Units selected",
    addSymbol: "Add\\Edit Layer Specific Symbology",
    pointSymbol: "Point Symbol: ",
    lineSymbol: "Line Symbol: ",
    polySymbol: "Polygon Symbol: ",
    symbologyTooltip: "Click on the symbology symbol that you want to edit.",
    spatialSearchLayer: "Spatial Search Layer",
    editDefaultSpatial: "Edit Spatial Search Properties",
    layerSymbology: "Layer Symbology",
    symbolServer: "from Server",
    symbolConfig: "from Defaults",
    symbolLayer: "from Layer",
    requiredfield: "Field Required",
    isempty: "is Empty",
    showinattributetable: "Open in Attribute Table Widget Automatically",
    showattachments: "Show Attachments",
    andor: "and\\or",
    tobeenabled: "to be enabled",
    graphicalSearchOptions: "Graphical Search Options",
    addgraphicalsearchoptions: "Graphical Search Option(s)",
    editdisabledtaboptions: "Search Tab(s) to Disable",
    graphictab: "Graphic Search Tab",
    attributetab: "Attribute Search Tab",
    spatialtab: "Spatial Search Tab",
    resultstab: "Results Tab",
    availabletabs: "Disabled Tab(s)",
    popuponly: "PopUp Only",
    graphicInteract: "Display popup on mouse-over search graphic",
    limit2mapextent: "Enable limit results to maps extent by default",
    addbuffertolegend: "Add the buffer layer to the maps legend",
    enableExportSearchURL: "Enable export search url",
    uniqueValues: "Retrieving unique values",
    processingUnique: "Processing unique values: ",
    of: " of ",
    showResultsPopup: "Display popup when results record is clicked",
    resultItemSorting: "Result Item Sorting",
    configureFieldsTip: "Please configure the fields which the query result will be sorted by.",
    addNew: "Add New",
    sortingOrder: "Order",
    ascending: "Ascending",
    descending: "Descending",
    sortBy: "Sort by",
    thenBy: "Then by",
    sortDisabledMsg: "Disabled: Service layer needs to support Advanced Query Capabilities: OrderBy",
    editSortBy: "Edit sort by",
    showuseMultiGraphics: "Show enable multi-part graphics option",
    showaddTolerance: "Show Add search tolerance to point selection option",
    showaddsqltext: "Show Include text query in selection criteria option",
    showbuffergraphic: "Show Buffer Graphic options",
    buffergraphicbydefault: "Enable Buffer Graphic by default",
    expressionValueRequired: "Value is required to be entered to enable search",
    enableelocateselect: "eLocate Widget Graphics",
    defExprPlaceholder: "Optional (see widgets help for details)",
    zoomscaletip: "Zoom scale will apply to all geometry types, not just points",
    forceScale: "Force Scale",
    editResultFormat: "Result Formatting",
    formatTooltip: "The formatting set here will affect the result popups and widget result text",
    attribTitleLbl: "Result Attribute Title:",
    attribTitleExample: "Name",
    attribValueLbl: "Result Attribute Value:",
    attribValueExample: "John Doe",
    color: "Color",
    insertbold: "Bold",
    insertitalic: "Italic",
    insertunderline: "Underline",
    preview: "Format Preview",
    maxBufferValue: "Maximum buffer distance",
    disablePopups: "Disable search results popup",
    disableUVCache: "Disable Unique Values Caching (see widgets help for details)",
    resultWrap: "Wrap result text",
    resultDefaultMsg: "Default is all text for each attribute and its title will appear on one line and you will scroll to see long text.",
    usePopupFrom: "Use Popup from",
    popupWebmap: "Web Map",
    popupeSearch: "eSearch",
    usePopupFrom2: "for this layer",
    popupWebmapTip: "If the layer does not have a popup defined in the web map then the standard eSearch popup will be used",
    dropdownfilter: "Filter dropdowns using",
    contains: "Contains",
    begins: "Begins with",
    allowcsvexport: "CSV Export",
    allowgeoexport: "GeoJSON Export",
    allowfcexport: "Feature Collection Export",
    startdateminus: "Start Date is current date minus",
    days: "day(s)",
    statistics: "Exclude from Statistics",
    defaultactivetool: "Default activated graphic Tool",
    globalOverrides: "Global Settings Override",
    hidenulldata: "Hide Null data in widget results and popups",
    autoZoomBuffer: "Auto zoom to buffer results",
    editGeneral: "Edit General Settings",
    editGeneraloptions: "General Widget Options",
    zoomFactor: "Zoom Factor",
    zoomFactorNote: "For example, a value of 1.5 will be 50% bigger",
    datedisplayformat: "Date display format",
    containsWord: "String search that use contains will search for each word seperately in query.",
    containsWordExample: "Example: \"John Doe\" will have a SQL expression of Upper(Name) LIKE \'\%John\%\' AND Upper(Name) LIKE \'\%Doe\%\' as opposed to the default of Upper(Name) LIKE \'\%John Doe\%\'",
    listInteract: "Highlight search result on mouse-over",
    attchmentView: "View attachment link(s) as",
    attchViewText: "Text Link",
    attachViewImage: "Image\/Icon Link"
  }),
  "ar": 0,
  "cs": 0,
  "da": 0,
  "de": 0,
  "es": 0,
  "et": 0,
  "fi": 0,
  "fr": 1,
  "he": 0,
  "it": 0,
  "ja": 0,
  "ko": 0,
  "lt": 0,
  "lv": 0,
  "nb": 0,
  "nl": 0,
  "pl": 0,
  "pt-br": 0,
  "pt-pt": 0,
  "ro": 0,
  "ru": 0,
  "sv": 0,
  "th": 0,
  "tr": 0,
  'zh-cn': 0
});
