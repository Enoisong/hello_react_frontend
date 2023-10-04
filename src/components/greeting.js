import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetings/greetingSlice';

export default function Greeting() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.greeting.text);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return <h1>{text}</h1>;
}
