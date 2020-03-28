import {post} from '../../utils/netwworking';

export function AppCheckIn_TechnicianCheckIn(payload) {
  return () => {
    return post('AppCheckIn_TechnicianCheckIn', payload)
      .then(({data, error}) => {
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
      .then(({data, error}) => {
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
      .then(({data, error}) => {
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
      .then(({data, error}) => {
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
      .then(({data, error}) => {
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
      .then(({data, error}) => {
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
      .then(({data, error}) => {
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
      .then(({data, error}) => {
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
      .then(({data, error}) => {
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
      .then(({data, error}) => {
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

export function AppCheckIn_GetStaffsTakeTurn(payload) {
  return () => {
    return post('AppCheckIn_GetStaffsTakeTurn', payload)
      .then(({data, error}) => {
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
//AppCheckIn_GetStafsWorking
export function AppCheckIn_GetStafsWorking(payload) {
  return () => {
    return post('AppCheckIn_GetStafsWorking', payload)
      .then(({data, error}) => {
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
      .then(({data, error}) => {
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
      .then(({data, error}) => {
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
      .then(({data, error}) => {
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
      .then(({data, error}) => {
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

export function AppCheckIn_GetAllCustomers(payload) {
  return () => {
    return post('AppCheckIn_GetAllCustomers', payload)
      .then(({data, error}) => {
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

export function AppCheckIn_GiftCardInfos(payload) {
  return () => {
    return post('AppCheckIn_GiftCardInfos', payload)
      .then(({data, error}) => {
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

//AppCheckIn_TicketAction

export function AppCheckIn_TicketAction(payload) {
  return () => {
    return post('AppCheckIn_TicketAction', payload)
      .then(({data, error}) => {
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

// AppCheckIn_ApptInfo
export function AppCheckIn_ApptInfo(payload) {
  return () => {
    return post('AppCheckIn_ApptInfo', payload)
      .then(({data, error}) => {
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

//AppCheckIn_TicketInfo
export function AppCheckIn_TicketInfo(payload) {
  return () => {
    return post('AppCheckIn_TicketInfo', payload)
      .then(({data, error}) => {
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

//AppCheckIn_StaffDone
export function AppCheckIn_StaffDone(payload) {
  return () => {
    return post('AppCheckIn_StaffDone', payload)
      .then(({data, error}) => {
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

//AppCheckIn_StaffCancel

export function AppCheckIn_StaffCancel(payload) {
  return () => {
    return post('AppCheckIn_StaffCancel', payload)
      .then(({data, error}) => {
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
