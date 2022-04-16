export type postType={
    id:number, 
    message: string,
    count:number
  }
export type contactType={
    github:string,
    vk:string,
    facebook:string,
    instagram:string,
    twitter:string,
    website:string,
    youtube:string,
    mainLink:string
  }
export type photosType={
    small:string|null,
    large:string|null
  }
export type profileType={
    userId:number, 
    lookingForAJob: boolean,
    lookingForAJobDescription:string,
    fullName:string,
    contacts:contactType,//это объект поэтому сделал выше type contactType
    photos:photosType
  }
export type UserType={
    id:number
    name:string
    status:string
    photos:photosType
  }
  