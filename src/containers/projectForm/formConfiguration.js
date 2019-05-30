import { countrylist, causes } from "../../helpers/form-data-options";

export default {
    form: {
        Title: {
            elementType: "input",
            tabId: 1,
            config: {
                type: "text",
                placeholder: "Project title",
                label: "Project title",
                validationRules: { required: true },
                touched: false,
                errorMessage: "This field is required",
                valid: false,
                value: ""
            }
        },
        Cause: {
            elementType: "select",
            tabId: 1,
            config: {
                label: "Project Primary cause",
                options: causes.map(cause => ({
                    displayedValue: cause
                })),
                value: "Animal Welfare",
                validationRules: { required: true },
                touched: false,
                errorMessage: "This field is required",
                valid: true
            }
        },
        Description: {
            elementType: "textarea",
            tabId: 1,
            config: {
                label: "Project_description",
                type: "textarea",
                placeholder: "Describe your opportunity here...",
                tooltipContent:
                    "Be very descriptive and try to anticipate as many questions as possible. This is your chance to recruit photographers to your cause.",
                value: "",
                validationRules: { required: true },
                touched: false,
                valid: false
            }
        },
        Photos: {
            elementType: "fileinput",
            tabId: 2,
            config: {
                label: "References",
                type: "button",
                placeholder: "Upload up to 5 reference images.",
                tooltipContent:
                    "Allowed file extensions: jpg, png, gif, jpeg, tif, tiffMax file size: 1 MB",
                value: [],
                validationRules: { required: false },
                touched: true,
                valid: true
            }
        },
        City: {
            elementType: "input",
            tabId: 3,
            config: {
                label: "City / Town",
                type: "text",
                placeholder: "City / Town",
                tooltipContent:
                    "If job is across multiple cities or regions pick the most important one, or where most of the time will be spent. Make sure to include details these details in the description.",
                value: "",
                validationRules: { required: true },
                touched: false,
                valid: false
            }
        },
        Country: {
            elementType: "select",
            tabId: 3,
            config: {
                label: "Country",
                options: countrylist.map(country => ({
                    displayedValue: country
                })),
                value: "Afghanistan",
                validationRules: { required: true },
                touched: false,
                valid: true
            }
        },
        Languages: {
            elementType: "input",
            tabId: 3,
            config: {
                label: "What languages will be spoken during this job?",
                type: "text",
                placeholder: "Order from most to least important",
                tooltipContent: "Separate by comma",
                value: "",
                validationRules: { required: false },
                touched: false,
                valid: true
            }
        },
        ProjectType: {
            elementType: "select",
            tabId: 4,
            config: {
                label: "Project Type",
                options: [
                    { displayedValue: "This project will happen at a specific date" },
                    {
                        displayedValue:
                            "This project will require multiple visits at specific dates"
                    },
                    {
                        displayedValue: "This is a creative contribution where dates are flexible"
                    },
                    { displayedValue: "This is an ongoing project" }
                ],
                value: "This project will happen at a specific date",
                validationRules: { required: true },
                touched: false,
                valid: true
            }
        },
        StartingDate: {
            elementType: "input",
            tabId: 4,
            config: {
                label: "Project starting date",
                type: "date",
                placeholder: "Order from most to least important",
                value: "",
                validationRules: { required: true },
                touched: false,
                valid: true
            }
        },
        Duration: {
            elementType: "input",
            tabId: 4,
            config: {
                label: "Project duration in days",
                type: "number",
                value: "",
                validationRules: { required: true },
                touched: false,
                valid: true
            }
        },
        ApplicationDate: {
            elementType: "input",
            tabId: 4,
            config: {
                label: "Accept applicants until",
                type: "date",
                placeholder: "Accept applicants until",
                value: "",
                validationRules: { required: true },
                touched: false,
                valid: true
            }
        },
        DeliveryDate: {
            elementType: "input",
            tabId: 4,
            config: {
                label: "Images delivery deadline",
                type: "date",
                placeholder: "Images delivery deadline",
                value: "",
                validationRules: { required: false },
                touched: false,
                valid: true
            }
        },
        FundingOptions: {
            elementType: "select",
            tabId: 5,
            config: {
                label: "Funding options",
                options: [
                    {
                        displayedValue:
                            "We have no funding avaliable for this job. We need someone who will do it for the cause"
                    },
                    { displayedValue: "We only have enough funding to cover expenses" },
                    { displayedValue: "We have funding avaliable for the photographer" }
                ],
                value:
                    "We have no funding avaliable for this job. We need someone who will do it for the Couse",
                validationRules: { required: true },
                touched: false,
                valid: true
            }
        },
        FundsDetails: {
            elementType: "textarea",
            tabId: 5,
            config: {
                label: "Funding / incentives details ",
                type: "textarea",
                placeholder: "Funding / incentives details",
                tooltipContent:
                    "If you have available funds please describe how are you planning on using it. If you don't have any funds don't stress: money isn't everything and most of our photographers are doing it for the cause, but if you can offer any other incentives here is your chance to  include them.",
                value: "",
                validationRules: { required: true },
                touched: false,
                valid: false
            }
        },
        FundsFairshot: {
            elementType: "switch",
            tabId: 5,
            config: {
                label: "Would you like Fairshots to help fund this project?",
                options: [
                    {
                        displayedValue: "yes"
                    },
                    { displayedValue: "No" }
                ],
                value: "",
                validationRules: { required: false },
                touched: false,
                valid: true
            }
        },
        PhotographersNeeded: {
            elementType: "input",
            tabId: 6,
            config: {
                label: "How many photographers do you need?",
                type: "text",
                placeholder: "How many photographers do you need?",
                value: "",
                validationRules: { required: true },
                touched: false,
                valid: false
            }
        },
        ProfessionalOnly: {
            elementType: "switch",
            tabId: 6,
            config: {
                label: "Applicant's category",
                options: [
                    {
                        displayedValue: "Only professional photographers can apply",
                        checked: true
                    },
                    { displayedValue: "Amateurs and students are also welcome to apply" }
                ],
                value: "Only professional photographers can apply",
                validationRules: { required: true },
                touched: false,
                valid: false
            }
        },
        GeographicRestriction: {
            elementType: "select",
            tabId: 6,
            config: {
                label: "Receive applicants from",
                options: [
                    { displayedValue: "Anywhere" },
                    { displayedValue: "The same continent as the opportunity" },
                    { displayedValue: "The country as the opportunity" },
                    { displayedValue: "The same region/state as the opportunity" },
                    { displayedValue: "The same city/town as the opportunity" }
                ],
                value: "Anywhere",
                validationRules: { required: false },
                touched: false,
                valid: true
            }
        },
        Question1: {
            elementType: "input",
            tabId: 6,
            config: {
                label: "Specific Question #1",
                type: "text",
                placeholder: "Specific Question #1",
                value: "",
                validationRules: { required: false },
                touched: false,
                valid: true
            }
        },
        Question2: {
            elementType: "input",
            tabId: 6,
            config: {
                label: "Specific Question #2",
                type: "text",
                placeholder: "Specific Question #2",
                value: "",
                validationRules: { required: false },
                touched: false,
                valid: true
            }
        },
        Question3: {
            elementType: "input",
            tabId: 6,
            config: {
                label: "Specific Question #3",
                type: "text",
                placeholder: "Specific Question #3",
                value: "",
                validationRules: { required: false },
                touched: false,
                valid: true
            }
        }
    }
};
