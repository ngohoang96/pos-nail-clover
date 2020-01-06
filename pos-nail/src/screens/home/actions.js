import { post } from '../../utils/netwworking';

export function AppCheckIn_TechnicianCheckIn(payload) {
  return () => {
    return post('AppCheckIn_TechnicianCheckIn', payload)
      .then(({ data, error }) => {
        if (!error) {
          return data;
        } else {
          return false;
        }
      })
      .catch(e => {
        return false;
      });
  };
}


export function AppCheckIn_TechnicianCheckOut(payload) {
  return () => {
    return post('AppCheckIn_TechnicianCheckOut', payload)
      .then(({ data, error }) => {
        if (!error) {
          return data;
        } else {
          return false;
        }
      })
      .catch(e => {
        return false;
      });
  };
}

export function AppCheckIn_EmployeeCheckIn(payload) {
  return () => {
    return post('AppCheckIn_EmployeeCheckIn', payload)
      .then(({ data, error }) => {
        if (!error) {
          return data;
        } else {
          return false;
        }
      })
      .catch(e => {
        return false;
      });
  };
}

export function AppCheckIn_EmployeeCheckOut(payload) {
  return () => {
    return post('AppCheckIn_EmployeeCheckOut', payload)
      .then(({ data, error }) => {
        if (!error) {
          return data;
        } else {
          return false;
        }
      })
      .catch(e => {
        return false;
      });
  };
}

export function AppCheckIn_CustomerSignIn(payload) {
  return () => {
    return post('AppCheckIn_CustomerSignIn', payload)
      .then(({ data, error }) => {
        if (!error) {
          return data;
        } else {
          return false;
        }
      })
      .catch(e => {
        return false;
      });
  };
}

export function AppCheckIn_CustomerCheckExits(payload) {
  return () => {
    return post('AppCheckIn_CustomerCheckExits', payload)
      .then(({ data, error }) => {
        if (!error) {
          return data;
        } else {
          return false;
        }
      })
      .catch(e => {
        return false;
      });
  };
}
export function AppCheckIn_ConfirmAppoimentTime(payload) {
  return () => {
    return post('AppCheckIn_ConfirmAppoimentTime', payload)
      .then(({ data, error }) => {
        if (!error) {
          return data;
        } else {
          return false;
        }
      })
      .catch(e => {
        return false;
      });
  };
}

export function AppCheckIn_CheckOwnerPIN(payload) {
  return () => {
    return post('AppCheckIn_CheckOwnerPIN', payload)
      .then(({ data, error }) => {
        if (!error) {
          return data;
        } else {
          return false;
        }
      })
      .catch(e => {
        return false;
      });
  };
}
export function AppCheckIn_CustomerSignUp(payload) {
  return () => {
    return post('AppCheckIn_CustomerSignUp', payload)
      .then(({ data, error }) => {
        if (!error) {
          return data;
        } else {
          return false;
        }
      })
      .catch(e => {
        return false;
      });
  };
}

export function AppCheckIn_SignInList(payload) {
  return () => {
    return post('AppCheckIn_SignInList', payload)
      .then(({ data, error }) => {
        if (!error) {
          return data;
        } else {
          return false;
        }
      })
      .catch(e => {
        return false;
      });
  };
}

export function AppCheckIn_GetStaffs(payload) {
  return () => {
    return post('AppCheckIn_GetStaffs', payload)
      .then(({ data, error }) => {
        if (!error) {
          return data;
        } else {
          return false;
        }
      })
      .catch(e => {
        return false;
      });
  };
}
export function AppCheckIn_GetServices(payload) {
  return () => {
    return post('AppCheckIn_GetServices', payload)
      .then(({ data, error }) => {
        if (!error) {
          return data;
        } else {
          return false;
        }
      })
      .catch(e => {
        return false;
      });
  };
}

export function AppCheckIn_GetAppoimentTime(payload) {
  return () => {
    return post('AppCheckIn_GetAppoimentTime', payload)
      .then(({ data, error }) => {
        if (!error) {
          return data;
        } else {
          return false;
        }
      })
      .catch(e => {
        return false;
      });
  };
}

export function AppCheckIn_WhyDownLoadApp(payload) {
  return () => {
    return post('AppCheckIn_WhyDownLoadApp', payload)
      .then(({ data, error }) => {
        if (!error) {
          return data;
        } else {
          return false;
        }
      })
      .catch(e => {
        return false;
      });
  };
}
export function AppCheckIn_TechnicianCloseOut(payload) {
  return () => {
    return post('AppCheckIn_TechnicianCloseOut', payload)
      .then(({ data, error }) => {
        if (!error) {
          return data
        } else {
          return false
        }
      })
      .catch(e => {
        return false
      })
  }
}