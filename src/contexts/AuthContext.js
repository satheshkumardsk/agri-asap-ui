import { createContext, useReducer, useEffect, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import PropTypes from 'prop-types';

const AuthContext = createContext();

const initialState = {
  user: null,
  role: null,
  loading: true,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload.user,
        role: action.payload.role,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        const role = userDoc.exists() ? userDoc.data().role : null;
        dispatch({
          type: "SET_USER",
          payload: { user, role },
        });
      } else {
        dispatch({
          type: "SET_USER",
          payload: { user: null, role: null },
        });
      }
    });

    return () => unsubscribe();
  }, []);

    return (
        <AuthContext.Provider value={{ state }}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext); 


//proptypes
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
