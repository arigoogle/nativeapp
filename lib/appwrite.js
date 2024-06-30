import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

export const appwriteConfig ={
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.peralta.oyen',
    projectId: '66801bbe00303f73fb18',
    databaseId: '66801d4b00118148ca56',
    userCollectionId: '66801d7f0036573f73e9',
    videoCollectionId: '66801db6002fc619cf0e',
    storageId: '66801fb9000987686745'
}

const {
  endpoint,
  platform,
  projectId,
  databaseId,
  userCollectionId,
  videoCollectionId,
  storageId
} = appwriteConfig;

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client)
const databases = new Databases(client);


// Register user
export async function createUser(email, password, username) {
    try {
      const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
      );
  
      if (!newAccount) throw Error;
  
      const avatarUrl = avatars.getInitials(username);
  
      await signIn(email, password);
  
      const newUser = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        ID.unique(),
        {
          accountId: newAccount.$id,
          email: email,
          username: username,
          avatar: avatarUrl,
        }
      );
  
      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  }

export async function signIn(email, password){
    try {
        await account.deleteSession('current');
        const session  = await account.createEmailPasswordSession(email, password)
        return session;
    } catch (error) {
        throw new Error(error);
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount= await account.get();
        if(!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if(!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log('error', error)
    }
}

export const getAllPosts = async () => {
  try {
    const posts = await databases.listDocuments(
      databaseId,
      videoCollectionId
    )

    return posts.documents;
  } catch (error) {
    throw new Error(error)
  }
}


// Register User
// export const createUser = () => {

//     account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
//         .then(function (response) {
//             console.log(response);
//         }, function (error) {
//             console.log(error);
//         });
// }