import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isSinglePageApp: true,
		// the array of questions
		questions: [
			{
				id: 0,
				title: "Please select what you are interested in:",
				answer: "No",
			},
			{
				id: 1,
				title: "Tell us about your new home",
				answer: "No",
			},
			{
				id: 2,
				title: "What type of home is it?",
				answer: "No",
			},
			{
				id: 3,
				title: "What is the primary use of the home?",
				answer: "No",
			},
			{
				id: 4,
				title: "When are you likely to purchase a home?",
				answer: "No",
			},
			{
				id: 5,
				title: "No title",
				answer: "No",
			},
			{
				id: 6,
				title: "No title",
				answer: "No",
			},
			{
				id: 7,
				title: "Tell us about the home you want to refinance!",
				answer: "No",
			},
			{
				id: 8,
				title: "What is the estimated value of your home?",
				answer: "No",
			},
			{
				id: 9,
				title: "Tell us about your current loan",
				answer: "No",
			},
			{
				id: 10,
				title: "No title",
				answer: "No",
			},
			{
				id: 11,
				title: "Are you looking to pull additional cash by refinancing?",
				answer: "No",
			},
			{
				id: 12,
				title: "Now tell us a little about you so we can get you matched with\
				 		the best mortgage lender and rate based on your specific needs!",
				answer: "No",
			},
			{
				id: 13,
				title: "No title",
				answer: "No",
			},
			{
				id: 14,
				title: "Please complete the following form to see your results",
				answer: "No",
			}
		],
		homevalue_options: [
			{ 'label': 'Please Choose:', 'value': '' },
			{ 'label': '75,000 - 100,000', 'value': '100000' },
			{ 'label': '100,000 - 125,000', 'value': '125000' },
			{ 'label': '126,000 - 149,000', 'value': '149000' },
			{ 'label': '150,000 - 155,000', 'value': '152500' },
			{ 'label': '155,001 - 160,000', 'value': '157500' },
			{ 'label': '160,001 - 165,000', 'value': '162500' },
			{ 'label': '165,001 - 170,000', 'value': '167500' },
			{ 'label': '170,001 - 175,000', 'value': '172500' },
			{ 'label': '175,001 - 180,000', 'value': '177500' },
			{ 'label': '180,001 - 185,000', 'value': '182500' },
			{ 'label': '185,001 - 190,000', 'value': '187500' },
			{ 'label': '190,001 - 195,000', 'value': '192500' },
			{ 'label': '195,001 - 200,000', 'value': '197500' },
			{ 'label': '200,001 - 210,000', 'value': '205000' },
			{ 'label': '210,001 - 220,000', 'value': '215000' },
			{ 'label': '220,001 - 230,000', 'value': '225000' },
			{ 'label': '230,001 - 240,000', 'value': '235000' },
			{ 'label': '240,001 - 250,000', 'value': '245000' },
			{ 'label': '260,001 - 270,000', 'value': '255000' },
			{ 'label': '250,001 - 260,000', 'value': '265000' },
			{ 'label': '270,001 - 280,000', 'value': '275000' },
			{ 'label': '280,001 - 290,000', 'value': '285000' },
			{ 'label': '290,001 - 300,000', 'value': '295000' },
			{ 'label': '300,001 - 310,000', 'value': '305000' },
			{ 'label': '310,001 - 320,000', 'value': '315000' },
			{ 'label': '320,001 - 330,000', 'value': '325000' },
			{ 'label': '330,001 - 340,000', 'value': '335000' },
			{ 'label': '340,001 - 350,000', 'value': '345000' },
			{ 'label': '350,001 - 360,000', 'value': '355000' },
			{ 'label': '360,001 - 370,000', 'value': '365000' },
			{ 'label': '370,001 - 380,000', 'value': '375000' },
			{ 'label': '380,001 - 390,000', 'value': '385000' },
			{ 'label': '390,001 - 400,000', 'value': '395000' },
			{ 'label': '400,001 - 420,000', 'value': '410000' },
			{ 'label': '420,001 - 440,000', 'value': '430000' },
			{ 'label': '440,001 - 460,000', 'value': '450000' },
			{ 'label': '460,001 - 480,000', 'value': '470000' },
			{ 'label': '480,001 - 500,000', 'value': '490000' },
			{ 'label': '500,001 - 520,000', 'value': '510000' },
			{ 'label': '520,001 - 540,000', 'value': '530000' },
			{ 'label': '540,001 - 560,000', 'value': '550000' },
			{ 'label': '560,001 - 580,000', 'value': '570000' },
			{ 'label': '580,001 - 600,000', 'value': '590000' },
			{ 'label': '600,001 - 620,000', 'value': '610000' },
			{ 'label': '620,001 - 640,000', 'value': '630000' },
			{ 'label': '640,001 - 660,000', 'value': '650000' },
			{ 'label': '660,001 - 680,000', 'value': '670000' },
			{ 'label': '680,001 - 700,000', 'value': '690000' },
			{ 'label': '700,001 - 720,000', 'value': '710000' },
			{ 'label': '720,001 - 740,000', 'value': '730000' },
			{ 'label': '740,001 - 760,000', 'value': '750000' },
			{ 'label': '760,001 - 780,000', 'value': '770000' },
			{ 'label': '780,001 - 800,000', 'value': '790000' },
			{ 'label': '800,001 - 820,000', 'value': '810000' },
			{ 'label': '820,001 - 840,000', 'value': '830000' },
			{ 'label': '840,001 - 860,000', 'value': '850000' },
			{ 'label': '860,001 - 880,000', 'value': '870000' },
			{ 'label': '880,001 - 900,000', 'value': '890000' },
			{ 'label': '900,001 - 920,000', 'value': '910000' },
			{ 'label': '920,001 - 940,000', 'value': '930000' },
			{ 'label': '940,001 - 960,000', 'value': '950000' },
			{ 'label': '960,001 - 980,000', 'value': '970000' },
			{ 'label': '980,001 - 1,000,000', 'value': '990000' },
			{ 'label': 'Over 1,000,000', 'value': '1000001' }
		],
	    downpayment_options: [
	    	{ 'label': 'Please Choose:', 'value': '' },
			{ 'label': 'fha', 'value': '3.5' },
			{ 'label': '5%', 'value': '5' },
			{ 'label': '10%', 'value': '10' },
			{ 'label': '15%', 'value': '15' },
			{ 'label': '20%', 'value': '20' },
			{ 'label': '25%', 'value': '25' },
			{ 'label': '30%', 'value': '30' },
			{ 'label': '35%', 'value': '35' },
			{ 'label': '40%', 'value': '40' },
			{ 'label': '45%', 'value': '45' },
			{ 'label': '50%', 'value': '50' },
			{ 'label': '55%', 'value': '55' },
			{ 'label': '60%', 'value': '60' },
			{ 'label': '65%', 'value': '65' },
			{ 'label': '70%', 'value': '70' },
			{ 'label': '75%', 'value': '75' },
			{ 'label': '80%', 'value': '80' },
			{ 'label': '85%', 'value': '85' },
			{ 'label': '90%', 'value': '90' },
			{ 'label': '95%', 'value': '95' },
			{ 'label': '100%', 'value': '100' }
		],
	    loantype_options: [	
	    	{ 'label': 'Please Choose:', 'value': '' },
			{ 'label': 'Fixed Rate', 'value': 'fixed' },
			{ 'label': 'Adjustable Rate', 'value': 'adjustable' },
			{ 'label': "I Don't know", 'value': 'fixed_or_adjustable' }
		],
	    states_options:   [ 
	    	{ 'label': 'Select your state:', 'value': '' },
			{ 'label': 'Alabama', 'value': 'AL' },
			{ 'label': 'Alaska', 'value': 'AK' },
			{ 'label': 'Arizona', 'value': 'AZ' },
			{ 'label': 'Arkansas', 'value': 'AR' },
			{ 'label': 'California', 'value': 'CA' },
			{ 'label': 'Colorado', 'value': 'CO' },
			{ 'label': 'Connecticut', 'value': 'CT' },
			{ 'label': 'Delaware', 'value': 'DE' },
			{ 'label': 'District of Columbia', 'value': 'DC' },
			{ 'label': 'Florida', 'value': 'FL' },
			{ 'label': 'Georgia', 'value': 'GA' },
			{ 'label': 'Hawaii', 'value': 'HI' },
			{ 'label': 'Iowa', 'value': 'IA' },
			{ 'label': 'Idaho', 'value': 'ID' },
			{ 'label': 'Illinois', 'value': 'IL' },
			{ 'label': 'Indiana', 'value': 'IN' },
			{ 'label': 'Kansas', 'value': 'KS' },
			{ 'label': 'Kentucky', 'value': 'KY' },
			{ 'label': 'Louisiana', 'value': 'LA' },
			{ 'label': 'Maine', 'value': 'ME' },
			{ 'label': 'Maryland', 'value': 'MD' },
			{ 'label': 'Massachusetts', 'value': 'MA' },
			{ 'label': 'Michigan', 'value': 'MI' },
			{ 'label': 'Minnesota', 'value': 'MN' },
			{ 'label': 'Missouri', 'value': 'MO' },
			{ 'label': 'Mississippi', 'value': 'MS' },
			{ 'label': 'Montana', 'value': 'MT' },
			{ 'label': 'Nebraska', 'value': 'NE' },
			{ 'label': 'Nevada', 'value': 'NV' },
			{ 'label': 'New Hamshire', 'value': 'NH' },
			{ 'label': 'New Jersey', 'value': 'NJ' },
			{ 'label': 'New Mexico', 'value': 'NM' },
			{ 'label': 'New York', 'value': 'NY' },
			{ 'label': 'North Carolina', 'value': 'NC' },
			{ 'label': 'North Dakota', 'value': 'ND' },
			{ 'label': 'Ohio', 'value': 'OH' },
			{ 'label': 'Oklahoma', 'value': 'OK' },
			{ 'label': 'Oregon', 'value': 'OR' },
			{ 'label': 'Pennsylvania', 'value': 'PA' },
			{ 'label': 'Rhode Island', 'value': 'RI' },
			{ 'label': 'South Carolina', 'value': 'SC' },
			{ 'label': 'South Dakota', 'value': 'SD' },
			{ 'label': 'Tennessee', 'value': 'TN' },
			{ 'label': 'Texas', 'value': 'TX' },
			{ 'label': 'Utah', 'value': 'UT' },
			{ 'label': 'Vermont', 'value': 'VT' },
			{ 'label': 'Virginia', 'value': 'VA' },
			{ 'label': 'Washington', 'value': 'WA' },
			{ 'label': 'West Virginia', 'value': 'WV' },
			{ 'label': 'Wisconsin', 'value': 'WI' },
			{ 'label': 'Wyoming', 'value': 'WY' }
		],
		timeframe_options: [
			{ 'label': 'Please Choose:', 'value': '' },
			{ 'label': 'Immediately', 'value': 'immediately' },
			{ 'label': '30 Days', 'value': '30_days' },
			{ 'label': '60 Days', 'value': '60_days' },
			{ 'label': '90 Days', 'value': '90_days' },
			{ 'label': 'No Time Constraint', 'value': 'no_time_constraint' }
		],
		loanInterest: '',
		loanType: '',
		creditType: '',
		refiZipcode: '',
		homeType: '',
		homeUse: '',
		refiHomeValue: '',
		firstMorBalance: '',
    	firstMorRate: '',
    	secondMorBalance: '',
    	secondMorRate: '',
    	refiLoanType: '',
    	additionalCash: '',
    	contactInfo: {
    		firstName: '',
    		lastName: '',
    		address: '',
    		city: '',
    		states: '',
    		zipcode: '',
    		priEmail: '',
    		priPhone: '',
    	},
    	estHomeValue: '',
    	estDownpayment: '',
    	estLoanType: '',
    	nhZipcode: '',
    	homeFound: 'no',
    	workWAgent: 'no',
    	nhTimeFrame: '',
	},

	getters: {
		// Get isSinglePageApp from the state.
		getIsSinglePageApp: state => state.isSinglePageApp,
		// Get the array of questions from the state.
		getQuestions: state => state.questions,
		// Get the visibility of QuestionResults from the state.
		getResultsVisibility: state => state.show_results,
		
		// Get the homevalue_options from the state.
		getHomevalueOptions: state => state.homevalue_options,
		// Get the downpayment_options from the state.
		getDownpaymentOptions: state => state.downpayment_options,
		// Get the loantype_options from the state.
		getLoantypeOptions: state => state.loantype_options,
		// Get the states_options from the state.
		getStatesOptions: state => state.states_options,
		// Get the timeframe_options from the state.
		getTimeframeOptions: state => state.timeframe_options,

		getSubmitData: state => {
			return {
				loanInterest: state.loanInterest,
				loanType: state.loanType,
				creditType: state.creditType,
				refiZipcode: state.refiZipcode,
				homeType: state.homeType,
				homeUse: state.homeUse,
				refiHomeValue: state.refiHomeValue,
				firstMorBalance: state.firstMorBalance,
	        	firstMorRate: state.firstMorRate,
	        	secondMorBalance: state.secondMorBalance,
	        	secondMorRate: state.secondMorRate,
	        	refiLoanType: state.refiLoanType,
	        	additionalCash: state.additionalCash,
	        	contactInfo: state.contactInfo,
	        	estHomeValue: state.estHomeValue,
		    	estDownpayment: state.estDownpayment,
		    	estLoanType: state.estLoanType,
		    	nhZipcode: state.nhZipcode,
		    	homeFound: state.homeFound,
		    	workWAgent: state.workWAgent,
		    	nhTimeFrame: state.nhTimeFrame,
			}
		},
	},

	mutations: {
		// Set the answer for the question and modify the state.
		SET_ANSWER_TO_QUESTION: (state, payload) => {
			// Get the index of the current question.
			var index = state.questions.findIndex(question => question.id === payload.id)
			// Get the question object.
			var item = state.questions[index]
			// Set the answer.
			item.answer = payload.answer
		},
		SET_LOAN_INTEREST: (state, payload) => {
			state.loanInterest = payload.loanInterest ? payload.loanInterest : ''
			state.loanType = payload.loanType ? payload.loanType : ''
		},
		SET_CREDIT_TYPE: (state, payload) => {
			state.creditType = payload
		},

		SET_REFI_ZIPCODE: (state, payload) => {
			state.refiZipcode = payload
		},
		SET_HOME_TYPE: (state, payload) => {
			state.homeType = payload
		},
		SET_HOME_USE: (state, payload) => {
			state.homeUse = payload
		},
		SET_REFI_HOME_VALUE: (state, payload) => {
			state.refiHomeValue = payload
		},
		SET_MORTGAGE_INFO: (state, payload) => {
			state.firstMorBalance = payload.firstMorBalance ? payload.firstMorBalance : ''
			state.firstMorRate = payload.firstMorRate ? payload.firstMorRate : ''
			state.secondMorBalance = payload.secondMorBalance ? payload.secondMorBalance : ''
			state.secondMorRate = payload.secondMorRate ? payload.secondMorRate : ''
			state.refiLoanType = payload.refiLoanType ? payload.refiLoanType : ''
		},
		SET_ADDITIONAL_CASH: (state, payload) => {
			state.additionalCash = payload
		},
		SET_CONTACT_INFO: (state, payload) => {
			state.contactInfo.firstName = payload.firstName ? payload.firstName : ''
			state.contactInfo.lastName = payload.lastName ? payload.lastName : ''
			state.contactInfo.address = payload.address ? payload.address : ''
			state.contactInfo.city = payload.city ? payload.city : ''
			state.contactInfo.states = payload.states ? payload.states : ''
			state.contactInfo.zipcode = payload.zipcode ? payload.zipcode : ''
			state.contactInfo.priEmail = payload.priEmail ? payload.priEmail : ''
			state.contactInfo.priPhone = payload.priPhone ? payload.priPhone : ''
		},
		SET_EST_DOWNPAYMENT_INFO: (state, payload) => {
			state.estHomeValue = payload.estHomeValue ? payload.estHomeValue : ''
			state.estDownpayment = payload.estDownpayment ? payload.estDownpayment : ''
			state.estLoanType = payload.estLoanType ? payload.estLoanType : ''
		},
		SET_NH_ZIPCODE: (state, payload) => {
			state.nhZipcode = payload
		},
		// SET_HOME_FOUND: (state, payload) => {
		// 	state.homeFound = payload
		// },
		// SET_WORK_W_AGENT: (state, payload) => {
		// 	state.workWAgent = payload
		// },
		// SET_NH_TIMEFRAME: (state, payload) => {
		// 	state.nhTimeFrame = payload
		// },
		SET_NH_AGENT_INFO: (state, payload) => {
			state.homeFound = payload.homeFound ? payload.homeFound : ''
			state.workWAgent = payload.workWAgent ? payload.workWAgent : ''	
			state.nhTimeFrame = payload.nhTimeFrame ? payload.nhTimeFrame : ''
		}
	},

	actions: {
		// Set the answer to the question
		setAnswerToQuestion: (context, payload) => {
			// Call the mutation of SET_ANSWER_TO_QUESTION.
			context.commit("SET_ANSWER_TO_QUESTION", payload)
		},
		setLoanInterest: (context, payload) => {
			context.commit("SET_LOAN_INTEREST", payload)
		},
		setCreditType: (context, payload) => {
			context.commit("SET_CREDIT_TYPE", payload)
		},

		setRefiZipcode: (context, payload) => {
			context.commit("SET_REFI_ZIPCODE", payload)
		},
		setHomeType: (context, payload) => {
			context.commit("SET_HOME_TYPE", payload)
		},
		setHomeUse: (context, payload) => {
			context.commit("SET_HOME_USE", payload)
		},
		setRefiHomeValue: (context, payload) => {
			context.commit("SET_REFI_HOME_VALUE", payload)
		},
		setMortgageInfo: (context, payload) => {
			context.commit("SET_MORTGAGE_INFO", payload)
		},
		setAdditionalCash: (context, payload) => {
			context.commit("SET_ADDITIONAL_CASH", payload)
		},
		setContactInfo: (context, payload) => {
			context.commit("SET_CONTACT_INFO", payload)
		},
		setEstDownpaymentInfo: (context, payload) => {
			context.commit("SET_EST_DOWNPAYMENT_INFO", payload)
		},
		setNhZipcode: (context, payload) => {
			context.commit("SET_NH_ZIPCODE", payload)
		},
		// setHomeFound: (context, payload) => {
		// 	context.commit("SET_HOME_FOUND", payload)
		// },
		// setWorkWAgent: (context, payload) => {
		// 	context.commit("SET_WORK_W_AGENT", payload)
		// },
		// setNhTimeFrame: (context, payload) => {
		// 	context.commit("SET_NH_TIMEFRAME", payload)
		// },
		setNhAgentInfo: (context, payload) => {
			context.commit("SET_NH_AGENT_INFO", payload)
		},
	},
})