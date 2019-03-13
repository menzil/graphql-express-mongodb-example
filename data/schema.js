import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql';
import UserType from './UserType';

// A GraphQL schema
// https://github.com/graphql/graphql-js
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      log: {
        type: new GraphQLList(GraphQLString),
        async resolve({ db }, args) {
          let items = await db.collection('log').find().toArray();
          return items.map(x => `${x.time} ${x.ip} ${x.message}`);
        }
      },
			users: {
        type: new GraphQLList(UserType),
        async resolve({ db }, args) {
          let users = await db.collection('user').find().toArray();
          return users.map(user=>{
						return user;
					});
        }
      },
			user: {
        type: UserType,
        async resolve({ db }, args) {
          let user = await db.collection('user').findOne();
          return user;
        }
      }
    }
  })
});

export default schema;
