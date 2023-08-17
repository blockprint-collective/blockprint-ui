export type FalseNegative = {
  [key: string]: number
}

export type PrecisionResults = {
  clients: PrecisionClient
  nodes: PrecisionNode[]
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
