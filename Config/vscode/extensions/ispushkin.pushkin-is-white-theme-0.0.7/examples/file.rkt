(plot (list (function (λ (x) (gamma (+ 1 x))) 0 4.5
                        #:label "gamma(x+1)")
              (function (λ (x) (factorial (truncate x))) #:color 2
                        #:label "factorial(floor(x))")))