export type FalseNegative = {
  [key: string]: number
}

export type PrecisionResults = {
  clients: PrecisionClient
  nodes: PrecisionNode[]
}

export type DiversityResults = {
  [key: string]: number
}

export type ClientDiversityResult = {
  client: string
  percentage: string
}

export type PrecisionClient = {
  [key: string]: Precision
}

export type PrecisionNode = {
  name: string
  label: string
  true_positives: number
  false_negatives: FalseNegative
  latest_slot: number
}

export type Precision = {
  true_positives: number
  true_negatives: number
  false_positives: number
  false_negatives: number
  false_negatives_detail: FalseNegative
}

export enum PrecisionView {
  OVERVIEW = 'OVERVIEW',
  TPR_DETAIL = 'TPR_DETAIL',
  PPV_DETAIL = 'PPV_DETAIL',
}

export enum DiversityView {
  VALIDATOR = 'VALIDATOR',
  NODE = 'NODE',
}

export type TableLegend = {
  error: string
  fair: string
  good: string
}

export type ResourceData = {
  title: string
  site: string
  docs: string
  github: string
  discord: string
}
