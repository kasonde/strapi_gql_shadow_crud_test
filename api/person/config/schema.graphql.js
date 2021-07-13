module.exports = {
	definition: ``,
	query: ``,
	resolver: {
		Query: {
			people: {
				description: "This will override the default find query",
				resolverOf: "application::person.person.find",
				resolver: async (obj, options, {context}) =>{
					return []
				}
			}
		}
	}
}