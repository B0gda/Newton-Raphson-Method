# Program for Newton Raphson Method

## Advantages of Newton Raphson Method:

* It is best method to solve the non-linear equations.
* It can also be used to solve the system of non-linear equations, non-linear differential and non-linear integral equations.
* The order of convergence is quadric i.e. of second order which makes this method fast as compared to other methods.
* It is very easy to implement on computer.

## Disadvantages of Newton Raphson Method:

* This method becomes complicated if the derivative of the function f(x) is not simple.
* This method requires a great and sensitive attention regarding the choice of its approximation.
* In each iteration, we have to evaluate two quantities f(x) and f'(x) for some x.

## Algorithm: 
Input: initial x, func(x), derivFunc(x) 
Output: Root of Func() 
 
Compute values of func(x) and derivFunc(x) for given initial x
Compute h: h = func(x) / derivFunc(x)
While h is greater than allowed error ε 
h = func(x) / derivFunc(x)
x = x – h
## Example
![input form](https://github.com/B0gda/Newton-Raphson-Method/blob/main/img/inputForm.png)
![output form](https://github.com/B0gda/Newton-Raphson-Method/blob/main/img/outputForm_1.png)
![output form 2](https://github.com/B0gda/Newton-Raphson-Method/blob/main/img/outputForm_2.png)


---
