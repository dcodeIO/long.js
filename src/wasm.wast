(module
  (export "mul" (func $mul))
  (export "div_s" (func $div_s))
  (export "div_u" (func $div_u))
  (export "rem_s" (func $rem_s))
  (export "rem_u" (func $rem_u))
  (export "get_high" (func $get_high))
  (global $high (mut i32) (i32.const 0))
  (func $get_high (result i32)
    (get_global $high)
  )
  (func $mul (param $xl i32) (param $xh i32) (param $yl i32) (param $yh i32) (result i32)
    (local $result i64)
    (set_local $result
      (i64.mul
        (i64.or
          (i64.extend_u/i32
            (get_local $xl)
          )
          (i64.shl
            (i64.extend_u/i32
              (get_local $xh)
            )
            (i64.const 32)
          )
        )
        (i64.or
          (i64.extend_u/i32
            (get_local $yl)
          )
          (i64.shl
            (i64.extend_u/i32
              (get_local $yh)
            )
            (i64.const 32)
          )
        )
      )
    )
    (set_global $high
      (i32.wrap/i64
        (i64.shr_s
          (get_local $result)
          (i64.const 32)
        )
      )
    )
    (i32.wrap/i64
      (get_local $result)
    )
  )
  (func $div_s (param $xl i32) (param $xh i32) (param $yl i32) (param $yh i32) (result i32)
    (local $result i64)
    (set_local $result
      (i64.div_s
        (i64.or
          (i64.extend_u/i32
            (get_local $xl)
          )
          (i64.shl
            (i64.extend_u/i32
              (get_local $xh)
            )
            (i64.const 32)
          )
        )
        (i64.or
          (i64.extend_u/i32
            (get_local $yl)
          )
          (i64.shl
            (i64.extend_u/i32
              (get_local $yh)
            )
            (i64.const 32)
          )
        )
      )
    )
    (set_global $high
      (i32.wrap/i64
        (i64.shr_s
          (get_local $result)
          (i64.const 32)
        )
      )
    )
    (i32.wrap/i64
      (get_local $result)
    )
  )
  (func $div_u (param $xl i32) (param $xh i32) (param $yl i32) (param $yh i32) (result i32)
    (local $result i64)
    (set_local $result
      (i64.div_u
        (i64.or
          (i64.extend_u/i32
            (get_local $xl)
          )
          (i64.shl
            (i64.extend_u/i32
              (get_local $xh)
            )
            (i64.const 32)
          )
        )
        (i64.or
          (i64.extend_u/i32
            (get_local $yl)
          )
          (i64.shl
            (i64.extend_u/i32
              (get_local $yh)
            )
            (i64.const 32)
          )
        )
      )
    )
    (set_global $high
      (i32.wrap/i64
        (i64.shr_s
          (get_local $result)
          (i64.const 32)
        )
      )
    )
    (i32.wrap/i64
      (get_local $result)
    )
  )
  (func $rem_s (param $xl i32) (param $xh i32) (param $yl i32) (param $yh i32) (result i32)
    (local $result i64)
    (set_local $result
      (i64.rem_s
        (i64.or
          (i64.extend_u/i32
            (get_local $xl)
          )
          (i64.shl
            (i64.extend_u/i32
              (get_local $xh)
            )
            (i64.const 32)
          )
        )
        (i64.or
          (i64.extend_u/i32
            (get_local $yl)
          )
          (i64.shl
            (i64.extend_u/i32
              (get_local $yh)
            )
            (i64.const 32)
          )
        )
      )
    )
    (set_global $high
      (i32.wrap/i64
        (i64.shr_s
          (get_local $result)
          (i64.const 32)
        )
      )
    )
    (i32.wrap/i64
      (get_local $result)
    )
  )
  (func $rem_u (param $xl i32) (param $xh i32) (param $yl i32) (param $yh i32) (result i32)
    (local $result i64)
    (set_local $result
      (i64.rem_u
        (i64.or
          (i64.extend_u/i32
            (get_local $xl)
          )
          (i64.shl
            (i64.extend_u/i32
              (get_local $xh)
            )
            (i64.const 32)
          )
        )
        (i64.or
          (i64.extend_u/i32
            (get_local $yl)
          )
          (i64.shl
            (i64.extend_u/i32
              (get_local $yh)
            )
            (i64.const 32)
          )
        )
      )
    )
    (set_global $high
      (i32.wrap/i64
        (i64.shr_s
          (get_local $result)
          (i64.const 32)
        )
      )
    )
    (i32.wrap/i64
      (get_local $result)
    )
  )
)

