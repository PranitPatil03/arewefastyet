/*
Copyright 2023 The Vitess Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

export type Theme = "default" | "dark";

export type statusDataTypes = {
  uuid: string;
  git_ref: string;
  source: string;
  started_at: string;
  finished_at: string;
  type_of: string;
  pull_nb?: number;
  golang_version: string;
  status: string;
};

export type prDataTypes = {
  ID: number;
  Author: string;
  Title: string;
  CreatedAt: string;
  Base: string;
  Head: string;
  error?: any;
};

export interface Range {
  infinite: boolean;
  unknown: boolean;
  value: number;
}
export interface MacroDataValue {
  center: number;
  confidence: number;
  range: Range;
}

export interface ComponentStats {
  vtgate: MacroDataValue;
  vttablet: MacroDataValue;
}

export interface MacroData {
  git_ref: string;
  total_qps: MacroDataValue;
  reads_qps: MacroDataValue;
  writes_qps: MacroDataValue;
  other_qps: MacroDataValue;
  tps: MacroDataValue;
  latency: MacroDataValue;
  errors: MacroDataValue;
  total_components_cpu_time: MacroDataValue;
  components_cpu_time: ComponentStats;
  total_components_mem_stats_alloc_bytes: MacroDataValue;
  components_mem_stats_alloc_bytes: ComponentStats;
}

export interface MacrosData {
  [key: string]: MacroData;
}

export interface SearchData {
  Macros: MacrosData;
}

export interface Range {
  infinite: boolean;
  unknown: boolean;
  value: number;
}

export interface ComparedValue {
  insignificant: boolean;
  delta: number;
  p: number;
  n1: number;
  n2: number;
  old: MacroDataValue;
  new: MacroDataValue;
}

export interface CompareResult {
  total_qps: ComparedValue;
  reads_qps: ComparedValue;
  writes_qps: ComparedValue;
  other_qps: ComparedValue;
  tps: ComparedValue;
}

export interface CompareData {
  type: string;
  result: CompareResult;
}

export interface RefsType {
  CommitHash: string;
  Name: string;
  RCnumber: number;
  Version: {
    Major: number;
    Minor: number;
    Patch: number;
  };
}
export interface PRTableType {
  [key: string]: string | React.ReactNode | null;
}

export interface RowProps {
  title: string;
  value: {
    center: number | string;
    range: { infinite: boolean; unknown: boolean; value: number };
  };
  fmt?: "time" | "memory";
}
