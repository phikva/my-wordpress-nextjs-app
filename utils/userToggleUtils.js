// to get user toggle value
export function getUserToggle(data, moduleType, togglePropertyName) {
    return data?.pageBy?.[moduleType]?.[togglePropertyName];
  }