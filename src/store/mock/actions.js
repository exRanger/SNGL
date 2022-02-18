export const LOAD_DATA = 'APP/LOAD_DATA'
export const PUT_DATA = 'APP/PUT_DATA'

export const putData = (data) => {
 return {
     type:  PUT_DATA,
     payload: data
 }
}
export const loadData = () => { 
 return {
     type: LOAD_DATA,
 }
}
