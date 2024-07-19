import React from 'react'

export const data = {
    d_s: 0.4,
    t_s: 0.02,
    t_conc: 0,
    t_coat: 0,
    rho_s: 7850,
    rho_conc: 1800,
    rho_coat: 940,
    rho_cont: 0,
    nu: 0.30,
    alpha: 0.0000117,
    young: 2.07e11,
    rho_water: 1027,
    s_lay: 9e4,
    pbar: 0,
    dt: 0,
    kc: 0.25,
    fcn: 42,
    l: 40,
    h: 110,
    e: 0.4,
    k_v: 8.980e5,
    k_l: 5.968e5,
    k_vs: 7.500e4,
    boundary_condition: 1
}

const DataContext = React.createContext(data)

export default DataContext