
import { GraphQLObjectType, GraphQLList, GraphQLString,GraphQLBoolean } from 'graphql';

export default new GraphQLObjectType({
  name: 'User',
  fields: {
		id: {
      type: GraphQLString,
      resolve(user) {
        return user._id;
      }
    },
    name: {
      type: GraphQLString,
      resolve(user) {
        return user.name;
      }
    },
		ip: {
      type: GraphQLString,
      resolve(user) {
        return user.ip;
      }
    },
		isActive: {
      type: GraphQLBoolean,
      resolve(user) {
        return user.isActive;
      }
    },
		createdAt: {
			type: GraphQLString,
			resolve(user) {
        return user.createdAt;
      }
		}

    // imageUrl: {
    //   type: GraphQLString,
    //   resolve(user) {
    //     return user.imageUrl;
    //   },
    // },

  },
});
