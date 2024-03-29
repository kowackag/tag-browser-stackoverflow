export interface TagsResponse {
    items: TagsResponseItem[]
    has_more: boolean
    quota_max: number
    quota_remaining: number
  }
  
  export interface TagsResponseItem {
    has_synonyms: boolean
    is_moderator_only: boolean
    is_required: boolean
    count: number
    name: string
    collectives?: CollectivesTagsResponse[]
  }
  
  export interface CollectivesTagsResponse {
    tags: string[]
    external_links: {
        type: string
        link: string
      }
    description: string
    link: string
    name: string
    slug: string
  }