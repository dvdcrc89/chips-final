/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

export type CreateUserInput = {
  id?: string | null;
  name: string;
  email: string;
  profilePic?: string | null;
  coverPic?: string | null;
  bio?: string | null;
  interest?: Array<string | null> | null;
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  profilePic?: ModelStringInput | null;
  coverPic?: ModelStringInput | null;
  bio?: ModelStringInput | null;
  interest?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateUserInput = {
  id: string;
  name?: string | null;
  email?: string | null;
  profilePic?: string | null;
  coverPic?: string | null;
  bio?: string | null;
  interest?: Array<string | null> | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreateJobsInput = {
  id?: string | null;
  category: string;
  date?: Array<JobsDateInput> | null;
  payPerHour: string;
  description: string;
};

export type JobsDateInput = {
  date: string;
  startAt: string;
  endAt: string;
};

export type ModelJobsConditionInput = {
  category?: ModelStringInput | null;
  payPerHour?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelJobsConditionInput | null> | null;
  or?: Array<ModelJobsConditionInput | null> | null;
  not?: ModelJobsConditionInput | null;
};

export type UpdateJobsInput = {
  id: string;
  category?: string | null;
  date?: Array<JobsDateInput> | null;
  payPerHour?: string | null;
  description?: string | null;
};

export type DeleteJobsInput = {
  id?: string | null;
};

export type CreateRestaurantInput = {
  id?: string | null;
  name: string;
  address: string;
  city: string;
  lat: number;
  lng: number;
  profilePic?: string | null;
  coverPic?: string | null;
  description?: string | null;
};

export type ModelRestaurantConditionInput = {
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  city?: ModelStringInput | null;
  lat?: ModelFloatInput | null;
  lng?: ModelFloatInput | null;
  profilePic?: ModelStringInput | null;
  coverPic?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelRestaurantConditionInput | null> | null;
  or?: Array<ModelRestaurantConditionInput | null> | null;
  not?: ModelRestaurantConditionInput | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateRestaurantInput = {
  id: string;
  name?: string | null;
  address?: string | null;
  city?: string | null;
  lat?: number | null;
  lng?: number | null;
  profilePic?: string | null;
  coverPic?: string | null;
  description?: string | null;
};

export type DeleteRestaurantInput = {
  id?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  email?: ModelStringInput | null;
  profilePic?: ModelStringInput | null;
  coverPic?: ModelStringInput | null;
  bio?: ModelStringInput | null;
  interest?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelJobsFilterInput = {
  id?: ModelIDInput | null;
  category?: ModelStringInput | null;
  payPerHour?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelJobsFilterInput | null> | null;
  or?: Array<ModelJobsFilterInput | null> | null;
  not?: ModelJobsFilterInput | null;
};

export type ModelRestaurantFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  city?: ModelStringInput | null;
  lat?: ModelFloatInput | null;
  lng?: ModelFloatInput | null;
  profilePic?: ModelStringInput | null;
  coverPic?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelRestaurantFilterInput | null> | null;
  or?: Array<ModelRestaurantFilterInput | null> | null;
  not?: ModelRestaurantFilterInput | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  profilePic: string | null;
  coverPic: string | null;
  bio: string | null;
  interest: Array<string | null> | null;
  jobsApplied: Array<{
    __typename: "Jobs";
    id: string;
    restaurant: {
      __typename: "Restaurant";
      id: string;
      name: string;
      address: string;
      city: string;
      lat: number;
      lng: number;
      profilePic: string | null;
      coverPic: string | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    };
    category: string;
    date: Array<{
      __typename: "JobsDate";
      date: string;
      startAt: string;
      endAt: string;
    }> | null;
    payPerHour: string;
    description: string;
    applicant: Array<{
      __typename: "User";
      id: string;
      name: string;
      email: string;
      profilePic: string | null;
      coverPic: string | null;
      bio: string | null;
      interest: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  profilePic: string | null;
  coverPic: string | null;
  bio: string | null;
  interest: Array<string | null> | null;
  jobsApplied: Array<{
    __typename: "Jobs";
    id: string;
    restaurant: {
      __typename: "Restaurant";
      id: string;
      name: string;
      address: string;
      city: string;
      lat: number;
      lng: number;
      profilePic: string | null;
      coverPic: string | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    };
    category: string;
    date: Array<{
      __typename: "JobsDate";
      date: string;
      startAt: string;
      endAt: string;
    }> | null;
    payPerHour: string;
    description: string;
    applicant: Array<{
      __typename: "User";
      id: string;
      name: string;
      email: string;
      profilePic: string | null;
      coverPic: string | null;
      bio: string | null;
      interest: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  profilePic: string | null;
  coverPic: string | null;
  bio: string | null;
  interest: Array<string | null> | null;
  jobsApplied: Array<{
    __typename: "Jobs";
    id: string;
    restaurant: {
      __typename: "Restaurant";
      id: string;
      name: string;
      address: string;
      city: string;
      lat: number;
      lng: number;
      profilePic: string | null;
      coverPic: string | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    };
    category: string;
    date: Array<{
      __typename: "JobsDate";
      date: string;
      startAt: string;
      endAt: string;
    }> | null;
    payPerHour: string;
    description: string;
    applicant: Array<{
      __typename: "User";
      id: string;
      name: string;
      email: string;
      profilePic: string | null;
      coverPic: string | null;
      bio: string | null;
      interest: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateJobsMutation = {
  __typename: "Jobs";
  id: string;
  restaurant: {
    __typename: "Restaurant";
    id: string;
    name: string;
    address: string;
    city: string;
    lat: number;
    lng: number;
    profilePic: string | null;
    coverPic: string | null;
    description: string | null;
    createdAt: string;
    updatedAt: string;
  };
  category: string;
  date: Array<{
    __typename: "JobsDate";
    date: string;
    startAt: string;
    endAt: string;
  }> | null;
  payPerHour: string;
  description: string;
  applicant: Array<{
    __typename: "User";
    id: string;
    name: string;
    email: string;
    profilePic: string | null;
    coverPic: string | null;
    bio: string | null;
    interest: Array<string | null> | null;
    jobsApplied: Array<{
      __typename: "Jobs";
      id: string;
      category: string;
      payPerHour: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateJobsMutation = {
  __typename: "Jobs";
  id: string;
  restaurant: {
    __typename: "Restaurant";
    id: string;
    name: string;
    address: string;
    city: string;
    lat: number;
    lng: number;
    profilePic: string | null;
    coverPic: string | null;
    description: string | null;
    createdAt: string;
    updatedAt: string;
  };
  category: string;
  date: Array<{
    __typename: "JobsDate";
    date: string;
    startAt: string;
    endAt: string;
  }> | null;
  payPerHour: string;
  description: string;
  applicant: Array<{
    __typename: "User";
    id: string;
    name: string;
    email: string;
    profilePic: string | null;
    coverPic: string | null;
    bio: string | null;
    interest: Array<string | null> | null;
    jobsApplied: Array<{
      __typename: "Jobs";
      id: string;
      category: string;
      payPerHour: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteJobsMutation = {
  __typename: "Jobs";
  id: string;
  restaurant: {
    __typename: "Restaurant";
    id: string;
    name: string;
    address: string;
    city: string;
    lat: number;
    lng: number;
    profilePic: string | null;
    coverPic: string | null;
    description: string | null;
    createdAt: string;
    updatedAt: string;
  };
  category: string;
  date: Array<{
    __typename: "JobsDate";
    date: string;
    startAt: string;
    endAt: string;
  }> | null;
  payPerHour: string;
  description: string;
  applicant: Array<{
    __typename: "User";
    id: string;
    name: string;
    email: string;
    profilePic: string | null;
    coverPic: string | null;
    bio: string | null;
    interest: Array<string | null> | null;
    jobsApplied: Array<{
      __typename: "Jobs";
      id: string;
      category: string;
      payPerHour: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  address: string;
  city: string;
  lat: number;
  lng: number;
  profilePic: string | null;
  coverPic: string | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  address: string;
  city: string;
  lat: number;
  lng: number;
  profilePic: string | null;
  coverPic: string | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRestaurantMutation = {
  __typename: "Restaurant";
  id: string;
  name: string;
  address: string;
  city: string;
  lat: number;
  lng: number;
  profilePic: string | null;
  coverPic: string | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  profilePic: string | null;
  coverPic: string | null;
  bio: string | null;
  interest: Array<string | null> | null;
  jobsApplied: Array<{
    __typename: "Jobs";
    id: string;
    restaurant: {
      __typename: "Restaurant";
      id: string;
      name: string;
      address: string;
      city: string;
      lat: number;
      lng: number;
      profilePic: string | null;
      coverPic: string | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    };
    category: string;
    date: Array<{
      __typename: "JobsDate";
      date: string;
      startAt: string;
      endAt: string;
    }> | null;
    payPerHour: string;
    description: string;
    applicant: Array<{
      __typename: "User";
      id: string;
      name: string;
      email: string;
      profilePic: string | null;
      coverPic: string | null;
      bio: string | null;
      interest: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    name: string;
    email: string;
    profilePic: string | null;
    coverPic: string | null;
    bio: string | null;
    interest: Array<string | null> | null;
    jobsApplied: Array<{
      __typename: "Jobs";
      id: string;
      category: string;
      payPerHour: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetJobsQuery = {
  __typename: "Jobs";
  id: string;
  restaurant: {
    __typename: "Restaurant";
    id: string;
    name: string;
    address: string;
    city: string;
    lat: number;
    lng: number;
    profilePic: string | null;
    coverPic: string | null;
    description: string | null;
    createdAt: string;
    updatedAt: string;
  };
  category: string;
  date: Array<{
    __typename: "JobsDate";
    date: string;
    startAt: string;
    endAt: string;
  }> | null;
  payPerHour: string;
  description: string;
  applicant: Array<{
    __typename: "User";
    id: string;
    name: string;
    email: string;
    profilePic: string | null;
    coverPic: string | null;
    bio: string | null;
    interest: Array<string | null> | null;
    jobsApplied: Array<{
      __typename: "Jobs";
      id: string;
      category: string;
      payPerHour: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type ListJobssQuery = {
  __typename: "ModelJobsConnection";
  items: Array<{
    __typename: "Jobs";
    id: string;
    restaurant: {
      __typename: "Restaurant";
      id: string;
      name: string;
      address: string;
      city: string;
      lat: number;
      lng: number;
      profilePic: string | null;
      coverPic: string | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    };
    category: string;
    date: Array<{
      __typename: "JobsDate";
      date: string;
      startAt: string;
      endAt: string;
    }> | null;
    payPerHour: string;
    description: string;
    applicant: Array<{
      __typename: "User";
      id: string;
      name: string;
      email: string;
      profilePic: string | null;
      coverPic: string | null;
      bio: string | null;
      interest: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetRestaurantQuery = {
  __typename: "Restaurant";
  id: string;
  name: string;
  address: string;
  city: string;
  lat: number;
  lng: number;
  profilePic: string | null;
  coverPic: string | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListRestaurantsQuery = {
  __typename: "ModelRestaurantConnection";
  items: Array<{
    __typename: "Restaurant";
    id: string;
    name: string;
    address: string;
    city: string;
    lat: number;
    lng: number;
    profilePic: string | null;
    coverPic: string | null;
    description: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  profilePic: string | null;
  coverPic: string | null;
  bio: string | null;
  interest: Array<string | null> | null;
  jobsApplied: Array<{
    __typename: "Jobs";
    id: string;
    restaurant: {
      __typename: "Restaurant";
      id: string;
      name: string;
      address: string;
      city: string;
      lat: number;
      lng: number;
      profilePic: string | null;
      coverPic: string | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    };
    category: string;
    date: Array<{
      __typename: "JobsDate";
      date: string;
      startAt: string;
      endAt: string;
    }> | null;
    payPerHour: string;
    description: string;
    applicant: Array<{
      __typename: "User";
      id: string;
      name: string;
      email: string;
      profilePic: string | null;
      coverPic: string | null;
      bio: string | null;
      interest: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  profilePic: string | null;
  coverPic: string | null;
  bio: string | null;
  interest: Array<string | null> | null;
  jobsApplied: Array<{
    __typename: "Jobs";
    id: string;
    restaurant: {
      __typename: "Restaurant";
      id: string;
      name: string;
      address: string;
      city: string;
      lat: number;
      lng: number;
      profilePic: string | null;
      coverPic: string | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    };
    category: string;
    date: Array<{
      __typename: "JobsDate";
      date: string;
      startAt: string;
      endAt: string;
    }> | null;
    payPerHour: string;
    description: string;
    applicant: Array<{
      __typename: "User";
      id: string;
      name: string;
      email: string;
      profilePic: string | null;
      coverPic: string | null;
      bio: string | null;
      interest: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  profilePic: string | null;
  coverPic: string | null;
  bio: string | null;
  interest: Array<string | null> | null;
  jobsApplied: Array<{
    __typename: "Jobs";
    id: string;
    restaurant: {
      __typename: "Restaurant";
      id: string;
      name: string;
      address: string;
      city: string;
      lat: number;
      lng: number;
      profilePic: string | null;
      coverPic: string | null;
      description: string | null;
      createdAt: string;
      updatedAt: string;
    };
    category: string;
    date: Array<{
      __typename: "JobsDate";
      date: string;
      startAt: string;
      endAt: string;
    }> | null;
    payPerHour: string;
    description: string;
    applicant: Array<{
      __typename: "User";
      id: string;
      name: string;
      email: string;
      profilePic: string | null;
      coverPic: string | null;
      bio: string | null;
      interest: Array<string | null> | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateJobsSubscription = {
  __typename: "Jobs";
  id: string;
  restaurant: {
    __typename: "Restaurant";
    id: string;
    name: string;
    address: string;
    city: string;
    lat: number;
    lng: number;
    profilePic: string | null;
    coverPic: string | null;
    description: string | null;
    createdAt: string;
    updatedAt: string;
  };
  category: string;
  date: Array<{
    __typename: "JobsDate";
    date: string;
    startAt: string;
    endAt: string;
  }> | null;
  payPerHour: string;
  description: string;
  applicant: Array<{
    __typename: "User";
    id: string;
    name: string;
    email: string;
    profilePic: string | null;
    coverPic: string | null;
    bio: string | null;
    interest: Array<string | null> | null;
    jobsApplied: Array<{
      __typename: "Jobs";
      id: string;
      category: string;
      payPerHour: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateJobsSubscription = {
  __typename: "Jobs";
  id: string;
  restaurant: {
    __typename: "Restaurant";
    id: string;
    name: string;
    address: string;
    city: string;
    lat: number;
    lng: number;
    profilePic: string | null;
    coverPic: string | null;
    description: string | null;
    createdAt: string;
    updatedAt: string;
  };
  category: string;
  date: Array<{
    __typename: "JobsDate";
    date: string;
    startAt: string;
    endAt: string;
  }> | null;
  payPerHour: string;
  description: string;
  applicant: Array<{
    __typename: "User";
    id: string;
    name: string;
    email: string;
    profilePic: string | null;
    coverPic: string | null;
    bio: string | null;
    interest: Array<string | null> | null;
    jobsApplied: Array<{
      __typename: "Jobs";
      id: string;
      category: string;
      payPerHour: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteJobsSubscription = {
  __typename: "Jobs";
  id: string;
  restaurant: {
    __typename: "Restaurant";
    id: string;
    name: string;
    address: string;
    city: string;
    lat: number;
    lng: number;
    profilePic: string | null;
    coverPic: string | null;
    description: string | null;
    createdAt: string;
    updatedAt: string;
  };
  category: string;
  date: Array<{
    __typename: "JobsDate";
    date: string;
    startAt: string;
    endAt: string;
  }> | null;
  payPerHour: string;
  description: string;
  applicant: Array<{
    __typename: "User";
    id: string;
    name: string;
    email: string;
    profilePic: string | null;
    coverPic: string | null;
    bio: string | null;
    interest: Array<string | null> | null;
    jobsApplied: Array<{
      __typename: "Jobs";
      id: string;
      category: string;
      payPerHour: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  address: string;
  city: string;
  lat: number;
  lng: number;
  profilePic: string | null;
  coverPic: string | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  address: string;
  city: string;
  lat: number;
  lng: number;
  profilePic: string | null;
  coverPic: string | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRestaurantSubscription = {
  __typename: "Restaurant";
  id: string;
  name: string;
  address: string;
  city: string;
  lat: number;
  lng: number;
  profilePic: string | null;
  coverPic: string | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          profilePic
          coverPic
          bio
          interest
          jobsApplied {
            __typename
            id
            restaurant {
              __typename
              id
              name
              address
              city
              lat
              lng
              profilePic
              coverPic
              description
              createdAt
              updatedAt
            }
            category
            date {
              __typename
              date
              startAt
              endAt
            }
            payPerHour
            description
            applicant {
              __typename
              id
              name
              email
              profilePic
              coverPic
              bio
              interest
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          profilePic
          coverPic
          bio
          interest
          jobsApplied {
            __typename
            id
            restaurant {
              __typename
              id
              name
              address
              city
              lat
              lng
              profilePic
              coverPic
              description
              createdAt
              updatedAt
            }
            category
            date {
              __typename
              date
              startAt
              endAt
            }
            payPerHour
            description
            applicant {
              __typename
              id
              name
              email
              profilePic
              coverPic
              bio
              interest
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          name
          email
          profilePic
          coverPic
          bio
          interest
          jobsApplied {
            __typename
            id
            restaurant {
              __typename
              id
              name
              address
              city
              lat
              lng
              profilePic
              coverPic
              description
              createdAt
              updatedAt
            }
            category
            date {
              __typename
              date
              startAt
              endAt
            }
            payPerHour
            description
            applicant {
              __typename
              id
              name
              email
              profilePic
              coverPic
              bio
              interest
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateJobs(
    input: CreateJobsInput,
    condition?: ModelJobsConditionInput
  ): Promise<CreateJobsMutation> {
    const statement = `mutation CreateJobs($input: CreateJobsInput!, $condition: ModelJobsConditionInput) {
        createJobs(input: $input, condition: $condition) {
          __typename
          id
          restaurant {
            __typename
            id
            name
            address
            city
            lat
            lng
            profilePic
            coverPic
            description
            createdAt
            updatedAt
          }
          category
          date {
            __typename
            date
            startAt
            endAt
          }
          payPerHour
          description
          applicant {
            __typename
            id
            name
            email
            profilePic
            coverPic
            bio
            interest
            jobsApplied {
              __typename
              id
              category
              payPerHour
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateJobsMutation>response.data.createJobs;
  }
  async UpdateJobs(
    input: UpdateJobsInput,
    condition?: ModelJobsConditionInput
  ): Promise<UpdateJobsMutation> {
    const statement = `mutation UpdateJobs($input: UpdateJobsInput!, $condition: ModelJobsConditionInput) {
        updateJobs(input: $input, condition: $condition) {
          __typename
          id
          restaurant {
            __typename
            id
            name
            address
            city
            lat
            lng
            profilePic
            coverPic
            description
            createdAt
            updatedAt
          }
          category
          date {
            __typename
            date
            startAt
            endAt
          }
          payPerHour
          description
          applicant {
            __typename
            id
            name
            email
            profilePic
            coverPic
            bio
            interest
            jobsApplied {
              __typename
              id
              category
              payPerHour
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateJobsMutation>response.data.updateJobs;
  }
  async DeleteJobs(
    input: DeleteJobsInput,
    condition?: ModelJobsConditionInput
  ): Promise<DeleteJobsMutation> {
    const statement = `mutation DeleteJobs($input: DeleteJobsInput!, $condition: ModelJobsConditionInput) {
        deleteJobs(input: $input, condition: $condition) {
          __typename
          id
          restaurant {
            __typename
            id
            name
            address
            city
            lat
            lng
            profilePic
            coverPic
            description
            createdAt
            updatedAt
          }
          category
          date {
            __typename
            date
            startAt
            endAt
          }
          payPerHour
          description
          applicant {
            __typename
            id
            name
            email
            profilePic
            coverPic
            bio
            interest
            jobsApplied {
              __typename
              id
              category
              payPerHour
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteJobsMutation>response.data.deleteJobs;
  }
  async CreateRestaurant(
    input: CreateRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<CreateRestaurantMutation> {
    const statement = `mutation CreateRestaurant($input: CreateRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        createRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          city
          lat
          lng
          profilePic
          coverPic
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRestaurantMutation>response.data.createRestaurant;
  }
  async UpdateRestaurant(
    input: UpdateRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<UpdateRestaurantMutation> {
    const statement = `mutation UpdateRestaurant($input: UpdateRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        updateRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          city
          lat
          lng
          profilePic
          coverPic
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRestaurantMutation>response.data.updateRestaurant;
  }
  async DeleteRestaurant(
    input: DeleteRestaurantInput,
    condition?: ModelRestaurantConditionInput
  ): Promise<DeleteRestaurantMutation> {
    const statement = `mutation DeleteRestaurant($input: DeleteRestaurantInput!, $condition: ModelRestaurantConditionInput) {
        deleteRestaurant(input: $input, condition: $condition) {
          __typename
          id
          name
          address
          city
          lat
          lng
          profilePic
          coverPic
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRestaurantMutation>response.data.deleteRestaurant;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          name
          email
          profilePic
          coverPic
          bio
          interest
          jobsApplied {
            __typename
            id
            restaurant {
              __typename
              id
              name
              address
              city
              lat
              lng
              profilePic
              coverPic
              description
              createdAt
              updatedAt
            }
            category
            date {
              __typename
              date
              startAt
              endAt
            }
            payPerHour
            description
            applicant {
              __typename
              id
              name
              email
              profilePic
              coverPic
              bio
              interest
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            email
            profilePic
            coverPic
            bio
            interest
            jobsApplied {
              __typename
              id
              category
              payPerHour
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetJobs(id: string): Promise<GetJobsQuery> {
    const statement = `query GetJobs($id: ID!) {
        getJobs(id: $id) {
          __typename
          id
          restaurant {
            __typename
            id
            name
            address
            city
            lat
            lng
            profilePic
            coverPic
            description
            createdAt
            updatedAt
          }
          category
          date {
            __typename
            date
            startAt
            endAt
          }
          payPerHour
          description
          applicant {
            __typename
            id
            name
            email
            profilePic
            coverPic
            bio
            interest
            jobsApplied {
              __typename
              id
              category
              payPerHour
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetJobsQuery>response.data.getJobs;
  }
  async ListJobss(
    filter?: ModelJobsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListJobssQuery> {
    const statement = `query ListJobss($filter: ModelJobsFilterInput, $limit: Int, $nextToken: String) {
        listJobss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            restaurant {
              __typename
              id
              name
              address
              city
              lat
              lng
              profilePic
              coverPic
              description
              createdAt
              updatedAt
            }
            category
            date {
              __typename
              date
              startAt
              endAt
            }
            payPerHour
            description
            applicant {
              __typename
              id
              name
              email
              profilePic
              coverPic
              bio
              interest
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListJobssQuery>response.data.listJobss;
  }
  async GetRestaurant(id: string): Promise<GetRestaurantQuery> {
    const statement = `query GetRestaurant($id: ID!) {
        getRestaurant(id: $id) {
          __typename
          id
          name
          address
          city
          lat
          lng
          profilePic
          coverPic
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRestaurantQuery>response.data.getRestaurant;
  }
  async ListRestaurants(
    filter?: ModelRestaurantFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRestaurantsQuery> {
    const statement = `query ListRestaurants($filter: ModelRestaurantFilterInput, $limit: Int, $nextToken: String) {
        listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            address
            city
            lat
            lng
            profilePic
            coverPic
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRestaurantsQuery>response.data.listRestaurants;
  }
  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          name
          email
          profilePic
          coverPic
          bio
          interest
          jobsApplied {
            __typename
            id
            restaurant {
              __typename
              id
              name
              address
              city
              lat
              lng
              profilePic
              coverPic
              description
              createdAt
              updatedAt
            }
            category
            date {
              __typename
              date
              startAt
              endAt
            }
            payPerHour
            description
            applicant {
              __typename
              id
              name
              email
              profilePic
              coverPic
              bio
              interest
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          name
          email
          profilePic
          coverPic
          bio
          interest
          jobsApplied {
            __typename
            id
            restaurant {
              __typename
              id
              name
              address
              city
              lat
              lng
              profilePic
              coverPic
              description
              createdAt
              updatedAt
            }
            category
            date {
              __typename
              date
              startAt
              endAt
            }
            payPerHour
            description
            applicant {
              __typename
              id
              name
              email
              profilePic
              coverPic
              bio
              interest
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          name
          email
          profilePic
          coverPic
          bio
          interest
          jobsApplied {
            __typename
            id
            restaurant {
              __typename
              id
              name
              address
              city
              lat
              lng
              profilePic
              coverPic
              description
              createdAt
              updatedAt
            }
            category
            date {
              __typename
              date
              startAt
              endAt
            }
            payPerHour
            description
            applicant {
              __typename
              id
              name
              email
              profilePic
              coverPic
              bio
              interest
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;

  OnCreateJobsListener: Observable<OnCreateJobsSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateJobs {
        onCreateJobs {
          __typename
          id
          restaurant {
            __typename
            id
            name
            address
            city
            lat
            lng
            profilePic
            coverPic
            description
            createdAt
            updatedAt
          }
          category
          date {
            __typename
            date
            startAt
            endAt
          }
          payPerHour
          description
          applicant {
            __typename
            id
            name
            email
            profilePic
            coverPic
            bio
            interest
            jobsApplied {
              __typename
              id
              category
              payPerHour
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateJobsSubscription>;

  OnUpdateJobsListener: Observable<OnUpdateJobsSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateJobs {
        onUpdateJobs {
          __typename
          id
          restaurant {
            __typename
            id
            name
            address
            city
            lat
            lng
            profilePic
            coverPic
            description
            createdAt
            updatedAt
          }
          category
          date {
            __typename
            date
            startAt
            endAt
          }
          payPerHour
          description
          applicant {
            __typename
            id
            name
            email
            profilePic
            coverPic
            bio
            interest
            jobsApplied {
              __typename
              id
              category
              payPerHour
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateJobsSubscription>;

  OnDeleteJobsListener: Observable<OnDeleteJobsSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteJobs {
        onDeleteJobs {
          __typename
          id
          restaurant {
            __typename
            id
            name
            address
            city
            lat
            lng
            profilePic
            coverPic
            description
            createdAt
            updatedAt
          }
          category
          date {
            __typename
            date
            startAt
            endAt
          }
          payPerHour
          description
          applicant {
            __typename
            id
            name
            email
            profilePic
            coverPic
            bio
            interest
            jobsApplied {
              __typename
              id
              category
              payPerHour
              description
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteJobsSubscription>;

  OnCreateRestaurantListener: Observable<
    OnCreateRestaurantSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRestaurant {
        onCreateRestaurant {
          __typename
          id
          name
          address
          city
          lat
          lng
          profilePic
          coverPic
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateRestaurantSubscription>;

  OnUpdateRestaurantListener: Observable<
    OnUpdateRestaurantSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRestaurant {
        onUpdateRestaurant {
          __typename
          id
          name
          address
          city
          lat
          lng
          profilePic
          coverPic
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateRestaurantSubscription>;

  OnDeleteRestaurantListener: Observable<
    OnDeleteRestaurantSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRestaurant {
        onDeleteRestaurant {
          __typename
          id
          name
          address
          city
          lat
          lng
          profilePic
          coverPic
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteRestaurantSubscription>;
}
